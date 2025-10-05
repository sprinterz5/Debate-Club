const title = document.querySelector('.starter-title');
const text  = document.querySelector('.starter-text');

function syncWidth() {
  if (!title || !text) return;
  text.style.width = title.offsetWidth + 'px';
}

// Keep in sync on content/resize
const ro = new ResizeObserver(syncWidth);
ro.observe(title);
window.addEventListener('load', syncWidth);
window.addEventListener('resize', syncWidth);