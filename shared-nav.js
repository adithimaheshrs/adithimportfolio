document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.top');
  if (!btn || !nav) return;
  btn.setAttribute('aria-label', 'Toggle menu');
  btn.setAttribute('aria-expanded', 'false');

  // Fixed overlays inside a `position: sticky` ancestor (.topbar) don't
  // escape to the viewport, so build a real full-screen overlay as a
  // direct child of <body> instead of relying on nav.top's own fixed pos.
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  nav.querySelectorAll('a').forEach(a => {
    const clone = a.cloneNode(true);
    overlay.appendChild(clone);
  });
  document.body.appendChild(overlay);

  function close() {
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
});
