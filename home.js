
var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
  slidesPerView: 8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


jQuery(document).ready(function () {
  var mySwiper = new Swiper ('.mySwiper1', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {  
    '576': {
      slidesPerView: 3,
      spaceBetween: 40,},
    
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,},  
        '992': {
            slidesPerView: 6,
            spaceBetween: 40,},
            '1200': {
                slidesPerView: 8,
                spaceBetween: 40,},
  },
     freeMode: true,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', },

})

});


var swiper = new Swiper(".mySwiper2", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


jQuery(document).ready(function () {
    var mySwiper = new Swiper ('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '576': {
        slidesPerView: 2,
        spaceBetween: 40,},
      
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,},  
          '992': {
              slidesPerView: 3,
              spaceBetween: 40,},
              '1200': {
                  slidesPerView: 4,
                  spaceBetween: 40,},
    },
      // Optional parameters   
       freeMode: true,
      loop: true,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });


  

var swiper = new Swiper(".mySwiper3", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


jQuery(document).ready(function () {
    var mySwiper = new Swiper ('.mySwiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '576': {
        slidesPerView: 2,
        spaceBetween: 40,},
      
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,},  
          '992': {
              slidesPerView: 3,
              spaceBetween: 40,},
              '1200': {
                  slidesPerView: 3,
                  spaceBetween: 40,},
    },
      // Optional parameters   
       freeMode: true,
      loop: true,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });