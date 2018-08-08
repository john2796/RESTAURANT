// let navBar = document.getElementById("navbar");
// console.log(navBar);

//  $(document).ready(function(){
//      $('.menu').click(function(){
//         $('ul').toggleClass('active');
//      });
//  });
$('.menu-toggle').click(function () {
  $('.mobile-site-nav').toggleClass('site-nav--open', 500);
});

$('.menu-toggle').click(function () {
  $('.hamburger').toggleClass('changeHamburgerStyle');
});

// $(document).ready(function() {
//   jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
// });

// Desktop Hover Effect
$('.desktop-sub-menu li').hover(function(){
  $(this).children('ul').slideToggle(400);
});


