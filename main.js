const title = document.querySelector('.starter-title');
const text  = document.querySelector('.starter-text');
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#primary-navigation');

function syncWidth() {
  if (!title || !text) return;
  text.style.width = title.offsetWidth + 'px';
}

function closeNav() {
  document.body.classList.remove('nav-open');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
  if (navigation) {
    navigation.removeAttribute('data-open');
  }
}

// Keep hero copy widths in sync
const ro = new ResizeObserver(syncWidth);
if (title) {
  ro.observe(title);
}
window.addEventListener('load', syncWidth);
window.addEventListener('resize', syncWidth);

if (navToggle && navigation) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      navigation.setAttribute('data-open', 'true');
    } else {
      navigation.removeAttribute('data-open');
    }
  });

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeNav());
  });

  window.matchMedia('(min-width: 1025px)').addEventListener('change', event => {
    if (event.matches) {
      closeNav();
    }
  });
}
