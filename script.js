// Ember & Clay — shared site behavior
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navRow = document.querySelector('.nav-row');
  if (toggle && navRow) {
    toggle.addEventListener('click', () => {
      navRow.classList.toggle('open');
      const isOpen = navRow.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // Contact form (demo only — no backend)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
        form.reset();
      }
    });
  }

  // Set active nav link based on current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === current) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
