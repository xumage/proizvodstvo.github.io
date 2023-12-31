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

//СЛАЙДЕР e200

var swiper = new Swiper(".e200Swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР next

var swiper = new Swiper(".nextSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР next

// СЛАЙДЕР r580

var swiper = new Swiper(".r580Swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР r580

// СЛАЙДЕР ducato

var swiper = new Swiper(".ducatoSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР ducato

// СЛАЙДЕР logan

var swiper = new Swiper(".loganSwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
});

// СЛАЙДЕР logan

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

// burger menu

// burger menu
