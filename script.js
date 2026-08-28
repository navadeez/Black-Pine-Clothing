
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menuBtn.textContent = '☰';
    }));
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
