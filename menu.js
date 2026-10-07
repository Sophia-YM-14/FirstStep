// Phone menu: the hamburger button opens/closes the full-screen menu.
(function () {
  var btn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // If the window grows past phone width, make sure the menu is closed.
  var mq = window.matchMedia('(min-width: 601px)');
  var onChange = function (e) { if (e.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
