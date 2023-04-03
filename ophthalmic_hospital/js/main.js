window.onload = function () {
    
  AOS.init({
    duration: 800,
  });

}

$(function () {

  AOS.init({
      duration: 800,
  });

  $('.mainSlider').slick({
    arrows: false,
    //autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
  });

/*   $(".inBtn").mouseover(function() {
    hide_menu = false;
  });

  $(".inBtn").mouseout(function() {
    hide_menu = true;
  }); */




  
})