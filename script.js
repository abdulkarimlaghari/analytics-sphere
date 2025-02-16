// Navigation Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission (Mock)
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
});

// Example: Toggle Mobile Menu (For Future Enhancements)
const menuToggle = document.createElement("button");
menuToggle.innerText = "☰";
menuToggle.classList.add("menu-toggle");
document.querySelector("header").appendChild(menuToggle);

menuToggle.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});