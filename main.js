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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


// Activate Stripe Payment Links only when public URLs are configured in payment-links.js.
(function () {
  const links = window.DEALBA_STRIPE_LINKS || {};
  const section = document.querySelector('[data-payment-section]');
  if (!section) return;
  let visible = false;
  document.querySelectorAll('[data-stripe-link]').forEach((el) => {
    const key = el.getAttribute('data-stripe-link');
    const url = links[key];
    if (url && /^https:\/\/buy\.stripe\.com\//.test(url)) {
      el.href = url;
      el.hidden = false;
      visible = true;
    }
  });
  if (visible) section.hidden = false;
})();
