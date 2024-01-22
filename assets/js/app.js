// --------------------------------------------------->
// <--------------------------------- Sticky Header Nav

const header = document.querySelector(".header-section");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// --------------------------------------------------->
// <--------------------------------- Preloader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// -------------------------------------------------->
// <--------------------------------- Toggle Menu

var NavLinks = document.getElementById("navLinks");
function showMenu() {
  NavLinks.style.left = "0";
}
function hideMenu() {
  NavLinks.style.left = "-100%";
}

// -------------------------------------------------->
// <----------------------------- Feature Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
