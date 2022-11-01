$(document).ready(function(){
$('.main_slider').slick({
  dots: false,
  //centerMode: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  arrow:true,
  swipeToSlide: true,
  prevArrow:'.prev',
  nextArrow:'.next',
  responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:false,
                    centerMode: true,
                    centerPadding: '40px',
                    autoplay:true,
                }
            }
            ]
});


$('.sell_slider').slick({
  dots: false,
  //centerMode: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  arrow:true,
  swipeToSlide: true,
  prevArrow:'.prevs',
  nextArrow:'.nexts',
  responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:false,
                    centerMode: true,
                    centerPadding: '40px',
                    autoplay:true,
                }
            }
            ]
});

$('.advan_slider').slick({
  dots: false,
  //centerMode: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  arrow:true,
  swipeToSlide: true,
  prevArrow:'.prevt',
  nextArrow:'.nextt',
  responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:false,
                    centerMode: true,
                    centerPadding: '40px',
                    autoplay:true,
                }
            }
            ]
});

});