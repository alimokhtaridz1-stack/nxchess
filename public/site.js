const toggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');
const mobile = window.matchMedia('(max-width: 1050px)');
function setMenu(open, returnFocus = false) {
  toggle?.setAttribute('aria-expanded', String(open));
  if (toggle) toggle.textContent = open ? 'Close menu' : 'Menu';
  navigation?.classList.toggle('is-open', open);
  if (returnFocus) toggle?.focus();
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.querySelector('.site-header')?.addEventListener('focusout', event => {
  if (!event.currentTarget.contains(event.relatedTarget)) setMenu(false);
});
mobile.addEventListener('change', () => setMenu(false));

const topic = new URLSearchParams(window.location.search).get('program');
const inquiry = document.querySelector('[data-inquiry]');
if (topic && inquiry) {
  const name = topic.slice(0, 120);
  inquiry.textContent = `Your inquiry: ${name}`;
  inquiry.hidden = false;
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('text', `Hello NX Chess, I would like to ask about ${name}.`);
    link.href = url.toString();
  });
}
