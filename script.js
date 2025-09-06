// Toggle navigation menu on mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
// Contact form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  this.reset();
});
// Fade-in animation for header text
window.addEventListener('load', () => {
  const headerText = document.querySelector('.header-text');
  if (headerText) {
    headerText.classList.add('fade-in');
  }
});
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate success
  alert("✅ Your message has been sent successfully!");
  form.reset();
});
