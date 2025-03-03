document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");
  const logoContainer = document.querySelector(".logo-container");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Close mobile menu when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to clicked link
      link.classList.add("active");
    });
  });

  // Logo animation on click
  logoContainer.addEventListener("click", () => {
    logoContainer.style.transform = "scale(0.95)";
    setTimeout(() => {
      logoContainer.style.transform = "scale(1)";
    }, 200);
  });

  // Change navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Staggered animation for nav items on page load
  const animateNavItems = () => {
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = "0";
        link.style.transform = "translateY(-20px)";
        link.style.transition = "all 0.3s ease";

        setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
        }, 100);
      }, index * 100);
    });
  };

  // Run animation on page load
  animateNavItems();

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  // Set default active link
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }
});
