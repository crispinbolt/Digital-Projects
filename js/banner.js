(function () {
  var banner = document.getElementById('announcement-banner');
  if (!banner) return;

  // Change data-banner-id in index.html when you publish a new message so
  // visitors who dismissed the old one see the new one.
  var storageKey = 'banner-dismissed:' + (banner.dataset.bannerId || 'default');

  function isDismissed() {
    try {
      return localStorage.getItem(storageKey) === '1';
    } catch (e) {
      return false;
    }
  }

  function remember() {
    try {
      localStorage.setItem(storageKey, '1');
    } catch (e) {
      /* storage unavailable; banner will reappear next visit */
    }
  }

  if (isDismissed()) {
    banner.hidden = true;
    return;
  }

  var closeButton = banner.querySelector('.banner__close');
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      banner.hidden = true;
      remember();
    });
  }
})();
