const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    initialSlide: 1, 
    breakpoints: {
        320: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
          
        },
        1200: {
          slidesPerView: 3, 
          
        },
    },
    
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    }
  });