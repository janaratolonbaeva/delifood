$(document).ready(function() {

// mobile menu
$(".nav__burger").click(function() {
    $(this).toggleClass("active");
    $(".nav").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});

// slick slider 
$('.promo__slider').slick({
  dots: false,
  slidesToScroll: 1,
  prevArrow: '.prev',
  nextArrow: '.next',
  dots: false,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 550,
      settings: "unslick"
    }
  ]
});

// tabs
$('.category__tabs').tabs();
$('.order__tabs').tabs();

// jqueryUIselectmenu 
$('select').selectmenu();

// jqueryUIAccordion
$( ".accordion" ).accordion({
  header: "> .order__accordion > h6",
  heightStyle: "content"
});


$('.category__tab-item__bt .btn').click(function() {
  $('.category__tab-item').addClass('active');
});

$('.category__tab-item__hover .btn').click(function(){
  $('.category__tab-item').removeClass('active');
});

// jqueryScrollbar
$(".delivery__article").mCustomScrollbar();


// Sticky header

$(window).scroll(function() {
  if ($(document).scrollTop() >= 200) {
    $('.nav').addClass("sticky");
  }
  else{
    $('.nav').removeClass("sticky");
  }
});

// Popup 
$('.item-js').click(function(){
  $('.overlay').addClass('opened');
});
$('.cancel').click(function(){
  $('.overlay').removeClass('opened');
});
$(document).mouseup(function (e){
  if (!$('.popup').is(e.target)
    && $('.popup').has(e.target).length === 0) {
    $('.overlay').removeClass('opened');
} 
});

});