document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  hamburger.addEventListener("click", function () {
    if (hamburgerMenu.style.display === "flex") {
      hamburgerMenu.style.display = "none";
    } else {
      hamburgerMenu.style.display = "flex";
    }
  });
});
