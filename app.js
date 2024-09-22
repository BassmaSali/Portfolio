const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#homeLink");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

document.getElementById("homeLink").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior of link click

  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  var linkedinContainer = document.getElementById("linkedinContainer");
  if (window.scrollY > 0) {
    // User has started scrolling, hide the LinkedIn image
    linkedinContainer.style.opacity = "0";
  } else {
    // User has scrolled back to the top, show the LinkedIn image
    linkedinContainer.style.opacity = "1";
  }
});
