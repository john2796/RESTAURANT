// let navBar = document.getElementById("navbar");
// console.log(navBar);

//  $(document).ready(function(){
//      $('.menu').click(function(){
//         $('ul').toggleClass('active');
//      });
//  });
$('.menu-toggle').click(function () {
  $('.mobile-site-nav').toggleClass('site-nav--open', 500);
})

$('.menu-toggle').click(function () {
  $('.hamburger').toggleClass('changeHamburgerStyle');
})