// СЛАЙДЕР

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 4,

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    774: {
      slidesPerView: 2,
    },
    962: {
      slidesPerView: 3,
    },
    1110: {
      slidesPerView: 4,
    },
  },
});

// СЛАЙДЕР

// ПОП АП

// const openPopUP = document.getElementById("open-popup");
// const closePopUp = document.getElementById("popup-close");
// const popUp = document.getElementById("popup");
//
// openPopUP.addEventListener("click", function (e) {
//   e.preventDefault();
//   popUp.classList.add("active");
// });
//
// closePopUp.addEventListener("click", () => {
//   popUp.classList.remove("active");
// });

// ПОП АП
