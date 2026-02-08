// Dark Mode Toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Topbar Active Link Highlight
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
