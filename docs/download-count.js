(() => {
  "use strict";

  const elements = document.querySelectorAll("[data-download-count]");
  if (!elements.length) return;

  const apiUrl = "https://api.github.com/repos/jump-david/binance-auto-trader/releases?per_page=100";
  const cacheKey = "jumpdavidlab-release-download-count-v1";
  const cacheTtlMs = 10 * 60 * 1000;
  const programAssetPattern = /^BinanceAutoTrader-.*\.(?:dmg|zip|exe|msi)$/i;

  const render = (count) => {
    const value = Number(count).toLocaleString("en-US");
    elements.forEach((element) => {
      element.textContent = value;
    });
  };

  const readCache = () => {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey));
      if (cached && Number.isFinite(cached.count)) {
        render(cached.count);
        return Date.now() - cached.savedAt < cacheTtlMs;
      }
    } catch (_) {
      // The API value below remains the source of truth when storage is unavailable.
    }
    return false;
  };

  const writeCache = (count) => {
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ count, savedAt: Date.now() }));
    } catch (_) {
      // Private browsing may disable storage; the live value is still displayed.
    }
  };

  if (readCache()) return;

  fetch(apiUrl, {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then((response) => {
      if (!response.ok) throw new Error(`GitHub API ${response.status}`);
      return response.json();
    })
    .then((releases) => {
      const count = releases.reduce((releaseTotal, release) => {
        const assetTotal = (release.assets || []).reduce((total, asset) => {
          if (!programAssetPattern.test(asset.name || "")) return total;
          return total + (Number(asset.download_count) || 0);
        }, 0);
        return releaseTotal + assetTotal;
      }, 0);

      render(count);
      writeCache(count);
    })
    .catch(() => {
      // Keep the last rendered or server-provided fallback value.
    });
})();
