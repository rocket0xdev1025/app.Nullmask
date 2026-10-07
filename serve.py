"""Serve the mirrored app and proxy Nullmask APIs so localhost is not blocked by CORS."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import http.client
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", "4173"))
UPSTREAMS = {
    "/nm-proxy": "proxy.nullmask.io",
    "/nm-guard": "guard.nullmask.io",
}
DROP_RESPONSE_HEADERS = {
    "connection",
    "content-encoding",
    "content-length",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "access-control-allow-origin",
    "access-control-allow-credentials",
    "access-control-allow-headers",
    "access-control-allow-methods",
}


def rewrite_cookie(value):
    kept = []
    for part in value.split(";"):
        name = part.strip().split("=", 1)[0].lower()
        if name in ("domain",):
            continue
        kept.append(part.strip())
    return "; ".join(kept)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def proxy_target(self):
        raw = self.path
        path, _, query = raw.partition("?")
        for prefix, host in UPSTREAMS.items():
            if path == prefix or path.startswith(prefix + "/"):
                rest = path[len(prefix):] or "/"
                if not rest.startswith("/"):
                    rest = "/" + rest
                if query:
                    rest += "?" + query
                return host, rest
        return None

    def end_cors(self, origin):
        allow = origin or "*"
        self.send_header("Access-Control-Allow-Origin", allow)
        self.send_header("Vary", "Origin")
        if origin:
            self.send_header("Access-Control-Allow-Credentials", "true")

    def do_OPTIONS(self):
        if not self.proxy_target():
            self.send_error(404)
            return
        origin = self.headers.get("Origin")
        requested = self.headers.get("Access-Control-Request-Headers", "content-type")
        self.send_response(204)
        self.end_cors(origin)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", requested)
        self.send_header("Access-Control-Max-Age", "86400")
        self.end_headers()

    def do_GET(self):
        if self.proxy_target():
            self.proxy_request()
            return
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        rel = path.lstrip("/")
        full = os.path.join(ROOT, rel.replace("/", os.sep))
        if path != "/" and not os.path.isfile(full):
            index = os.path.join(full, "index.html")
            if os.path.isfile(index):
                suffix = self.path[len(path):]
                self.path = "/" + rel.strip("/") + "/index.html" + suffix
        return super().do_GET()

    def do_POST(self):
        if self.proxy_target():
            self.proxy_request()
            return
        self.send_error(404)

    def do_PUT(self):
        self.do_POST()

    def do_PATCH(self):
        self.do_POST()

    def do_DELETE(self):
        self.do_POST()

    def proxy_request(self):
        host, upstream_path = self.proxy_target()
        origin = self.headers.get("Origin")
        length = int(self.headers.get("Content-Length", "0") or "0")
        body = self.rfile.read(length) if length else None
        headers = {
            "Host": host,
            "Origin": "https://app.nullmask.io",
            "Referer": "https://app.nullmask.io/",
            "Accept": self.headers.get("Accept", "*/*"),
        }
        content_type = self.headers.get("Content-Type")
        if content_type:
            headers["Content-Type"] = content_type
        cookie = self.headers.get("Cookie")
        if cookie:
            headers["Cookie"] = cookie
        if body is not None:
            headers["Content-Length"] = str(len(body))
        try:
            conn = http.client.HTTPSConnection(host, timeout=30)
            conn.request(self.command, upstream_path, body=body, headers=headers)
            resp = conn.getresponse()
            payload = resp.read()
            status = resp.status
            resp_headers = resp.getheaders()
            conn.close()
        except OSError as exc:
            message = f"Upstream unavailable: {exc}".encode()
            self.send_response(502)
            self.end_cors(origin)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Content-Length", str(len(message)))
            self.end_headers()
            self.wfile.write(message)
            return

        self.send_response(status)
        for key, value in resp_headers:
            if key.lower() in DROP_RESPONSE_HEADERS:
                continue
            if key.lower() == "set-cookie":
                value = rewrite_cookie(value)
            self.send_header(key, value)
        self.end_cors(origin)
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"http://127.0.0.1:{PORT}", flush=True)
    server.serve_forever()
