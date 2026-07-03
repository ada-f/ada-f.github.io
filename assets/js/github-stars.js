// Live GitHub star counts for publication cards.
// For any pub-item with a GitHub "Code" link, fetch the repo's star count and,
// if it exceeds the threshold, show a live badge in the card's tag row.
// Results are cached in localStorage to stay within GitHub's unauthenticated
// API rate limit (60 requests/hour/IP) while still updating a few times a day.
(function () {
  "use strict";

  var THRESHOLD = 100;                 // only display repos with more than this many stars
  var CACHE_TTL = 3 * 60 * 60 * 1000;  // 3 hours
  var CACHE_KEY = "gh-stars-cache-v1";

  function loadCache() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveCache(cache) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) {}
  }

  function formatStars(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  function render(item, link, count) {
    if (count <= THRESHOLD) return;
    if (item.querySelector(".pub-stars")) return;
    var badge = document.createElement("span");
    badge.className = "pub-stars";
    badge.title = count.toLocaleString() + " GitHub stars";
    badge.textContent = formatStars(count) + " GitHub stars";
    link.insertAdjacentElement("afterend", badge);
  }

  var cache = loadCache();
  var now = Date.now();

  Array.prototype.forEach.call(document.querySelectorAll(".pub-item"), function (item) {
    var link = item.querySelector('.pub-item__links a[href*="github.com/"]');
    if (!link) return;
    var m = link.getAttribute("href").match(/github\.com\/([^\/#?]+)\/([^\/#?]+)/);
    if (!m) return;
    var repo = m[1] + "/" + m[2];

    var cached = cache[repo];
    if (cached && (now - cached.t) < CACHE_TTL) {
      render(item, link, cached.s);
      return;
    }

    fetch("https://api.github.com/repos/" + repo)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || typeof data.stargazers_count !== "number") return;
        cache[repo] = { s: data.stargazers_count, t: Date.now() };
        saveCache(cache);
        render(item, link, data.stargazers_count);
      })
      .catch(function () { /* offline or rate-limited: silently skip */ });
  });
})();
