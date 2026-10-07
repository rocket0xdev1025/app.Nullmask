/* Reroute Nullmask API calls to the local proxy in serve.py. */
(function () {
  var proxyOrigin = "http://127.0.0.1:4173";
  var routes = [
    ["https://proxy.nullmask.io", proxyOrigin + "/nm-proxy"],
    ["https://guard.nullmask.io", proxyOrigin + "/nm-guard"],
  ];

  function rewrite(url) {
    for (var i = 0; i < routes.length; i++) {
      if (url.indexOf(routes[i][0]) === 0) {
        return routes[i][1] + url.slice(routes[i][0].length);
      }
    }
    return url;
  }

  var originalFetch = window.fetch;
  if (typeof originalFetch !== "function") return;

  window.fetch = function (input, init) {
    try {
      if (typeof input === "string") {
        var next = rewrite(input);
        if (next !== input) return originalFetch.call(this, next, init);
      } else if (input instanceof URL) {
        var nextUrl = rewrite(input.href);
        if (nextUrl !== input.href) return originalFetch.call(this, nextUrl, init);
      } else if (input && typeof input.url === "string") {
        var nextReq = rewrite(input.url);
        if (nextReq !== input.url) return originalFetch.call(this, new Request(nextReq, input), init);
      }
    } catch (err) {}
    return originalFetch.call(this, input, init);
  };
})();
