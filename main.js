const toggle = document.querySelector('[data-menu-toggle]');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}


const stripeLinks = window.DEALBA_STRIPE_LINKS || {};
document.querySelectorAll('[data-stripe-link]').forEach((link) => {
  const key = link.getAttribute('data-stripe-link');
  const url = stripeLinks[key];
  const container = link.closest('[data-stripe-container]');
  if (url && /^https:\/\//.test(url)) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'nofollow noopener';
    if (container) container.hidden = false;
  } else {
    if (container) container.hidden = true;
  }
});
