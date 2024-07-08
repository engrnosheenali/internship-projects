document.addEventListener("DOMContentLoaded", function () {
  // Highlight active link in navbar
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Smooth scrolling to anchor links
  const scrollLinks = document.querySelectorAll(".nav-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Collapse navbar on click (for mobile view)
  const navToggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector(".collapse.navbar-collapse");

  navToggler.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close the navbar when a link is clicked
  document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});
