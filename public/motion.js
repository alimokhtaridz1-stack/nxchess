const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const controls = document.querySelectorAll('[data-motion-toggle]');
let paused = false;
try { paused = localStorage.getItem('nxchess-motion') === 'paused'; } catch { /* Storage is optional. */ }
function updateMotion() {
  const stopped = paused || preference.matches;
  document.documentElement.classList.toggle('motion-running', !stopped);
  document.documentElement.classList.toggle('motion-paused', stopped);
  controls.forEach(button => {
    button.hidden = false;
    button.disabled = preference.matches;
    button.textContent = preference.matches ? 'Motion reduced' : paused ? 'Play motion' : 'Pause motion';
    button.setAttribute('aria-label', preference.matches ? 'Background motion disabled by your reduced-motion preference' : paused ? 'Play background motion' : 'Pause background motion');
  });
}
controls.forEach(button => button.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('nxchess-motion', paused ? 'paused' : 'playing'); } catch { /* Keep the control functional without storage. */ }
  updateMotion();
}));
preference.addEventListener('change', updateMotion);
document.addEventListener('visibilitychange', () => document.documentElement.classList.toggle('motion-tab-hidden', document.hidden));
updateMotion();
