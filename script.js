// Dark mode toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Scroll animation for cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, {threshold:0.1});

cards.forEach(card => observer.observe(card));

// Active link highlighting
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.topbar-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});
