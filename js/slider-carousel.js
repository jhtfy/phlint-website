$(document).ready(function(){
  $('.autoplay').slick({
  dots: true,
  /*centerMode: true,*/
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        /*centerMode: true,*/
        /*centerPadding: '40px',*/
        slidesToShow: 3,
        slidesToScroll:3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        /*centerMode: true,*/
        /*centerPadding: '40px',*/
        slidesToShow: 2,
        slidesToScroll:2
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 580,
      settings: {
      	dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
  ]
});
});