window.onload = function () {
    
  AOS.init({
    duration: 800,
  });

}

$(function () {

  $('.mainSlider').slick({
    arrows: false,
    //autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
  });

})