// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const faq = button.nextElementSibling;
//     const icon = button.children[1];

//     faq.classList.toggle("show");
//     icon.classList.toggle("rotate");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  const answers = document.querySelectorAll(".question p");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      answers.forEach((answer, i) => {
        if (index === i) {
          answer.classList.toggle("show");
        } else {
          answer.classList.remove("show");
        }
      });

      const icon = button.children[1];
      icon.classList.toggle("rotate");

      // Close all other icons except the clicked one
      buttons.forEach((otherButton, otherIndex) => {
        if (index !== otherIndex) {
          otherButton.children[1].classList.remove("rotate");
        }
      });
    });
  });
});
