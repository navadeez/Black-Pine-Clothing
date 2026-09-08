document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.textContent = '☰';
    }));
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Enquiry form: provide the requested "Not provided" fallback values
  // immediately before the form is submitted to FormSubmit.
  const quoteForm = document.querySelector('.quote-form');

  if (quoteForm) {
    quoteForm.addEventListener('submit', () => {
      const company = quoteForm.querySelector('[name="company_name"]');
      const email = quoteForm.querySelector('[name="email"]');
      const quantity = quoteForm.querySelector('[name="quantity"]');
      const details = quoteForm.querySelector('[name="more_details"]');

      if (company && !company.value.trim()) company.value = 'Not provided';
      if (email && !email.value.trim()) email.value = 'Not provided';
      if (quantity && !quantity.value.trim()) quantity.value = 'Not provided';
      if (details && !details.value.trim()) details.value = 'Not provided';
    });
  }
});
