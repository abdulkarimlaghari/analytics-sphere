document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Example: Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Toggle Mobile Menu (For Future Enhancements)
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").appendChild(menuToggle);

    menuToggle.addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });
});
