// СЛАЙДЕР преимущества

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

// СЛАЙДЕР преимущества

//СЛАЙДЕР ПРЕВЬЮ

var swiper = new Swiper(".preSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР ПРЕВЬЮ

// КАЛЕНДАРЬ

new AirDatepicker("#airdatepicker", {
  isMobile: true,
  range: true,
  multipleDatesSeparator: " - ",
  timepicker: true,
  autoClose: true,
});

// КАЛЕНДАРЬ

// СПИСОК
const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});
// СПИСОК
