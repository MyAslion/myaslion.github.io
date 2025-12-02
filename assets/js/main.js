// Minimal client-side enhancements: DARK MODE + smooth scroll + keyboard
(() => {
  const root = document.documentElement;
  const toggleEl = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  function setTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', theme);
  }
  // initial
  if (savedTheme === 'dark') setTheme('dark');
  if (toggleEl) toggleEl.addEventListener('click', (e) => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });

  // smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
})();
