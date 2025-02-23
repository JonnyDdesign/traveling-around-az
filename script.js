document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

        // Stagger animation effect for nav items
        navItems.forEach((item, index) => {
          if (navLinks.classList.contains("active")) {
            navItems.style.animation = `fadeIn 0.3s ease-in-out ${index * 0.1}s forwards`;
          } else {
            item.style.animation = "none";
          }
        });
    });
});