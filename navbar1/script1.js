document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("checkbox");
  const links = document.querySelectorAll(".links a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      toggleButton.checked = false; // Close the mobile menu after clicking
    });
  });

  // Smooth scroll function
  function goToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
      const elementTop = element.offsetTop;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  }

  // Toggle mobile menu
  toggleButton.addEventListener("click", function () {
    document.getElementById("links").classList.toggle("show");
  });
});
