// Dark mode toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  const icon = toggleBtn.querySelector("i");
  if (document.body.classList.contains("light-mode")) {
    icon.className = "fas fa-moon";
  } else {
    icon.className = "fas fa-sun";
  }
});


// Scroll animation for cards
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));


// Active link highlighting
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.topbar-links li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// Certificates Slider (9 Certificates PNG + Buttons + Indicators + Lightbox)
const certImages = [
  "cert1.png",
  "cert2.png",
  "cert3.png",
  "cert4.png",
  "cert5.png",
  "cert6.png",
  "cert7.png",
  "cert8.png",
  "cert9.png"
];

let certIndex = 0;

const certImageElement = document.getElementById("certImage");
const indicatorsContainer = document.getElementById("certIndicators");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


// Create Indicators
function createIndicators() {
  if (!indicatorsContainer) return;

  indicatorsContainer.innerHTML = "";

  certImages.forEach((img, i) => {
    const dot = document.createElement("span");

    dot.addEventListener("click", () => {
      certIndex = i;
      updateCertificate();
    });

    indicatorsContainer.appendChild(dot);
  });
}


// Update Certificate Image
function updateCertificate() {
  if (!certImageElement) return;

  certImageElement.style.opacity = 0;

  setTimeout(() => {
    certImageElement.src = certImages[certIndex];
    certImageElement.style.opacity = 1;

    // Update active indicator
    const dots = document.querySelectorAll(".cert-indicators span");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[certIndex]) dots[certIndex].classList.add("active");

  }, 350);
}


// Next / Prev Buttons
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    certIndex = (certIndex + 1) % certImages.length;
    updateCertificate();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    certIndex = (certIndex - 1 + certImages.length) % certImages.length;
    updateCertificate();
  });
}


// Auto Slide every 4 seconds
setInterval(() => {
  certIndex = (certIndex + 1) % certImages.length;
  updateCertificate();
}, 4000);


// Lightbox Open
if (certImageElement) {
  certImageElement.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = certImages[certIndex];
  });
}


// Lightbox Close
if (closeLightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}


// Close when clicking outside image
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}


// Init
createIndicators();
updateCertificate();
