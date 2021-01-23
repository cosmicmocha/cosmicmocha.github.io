$(document).ready(function(){
  checkMobile();
  $(window).resize(checkMobile);

  $('#ribbon-close').click(function(){
  $('.banner').slideUp(500);
 $('nav').css('padding', '0 0 10px');
  checkSize();
  });

if ($( window ).width() < 768) {
$('.nav-left').replaceWith('<ul class="nav-left"><li><a href="javascript:void(0)" onclick="openNav()" id="menu-button"><div id="menu-icon"><span></span><span></span><span></span></div> <p class="mono">&nbsp;menu</p></a></li></ul>');
}
else {
$('.nav-left').replaceWith('<ul class="nav-left"><li class="drop"><a href="products.html" class="drop-text">shop</a><div class="drop-links"><a href="products.html">whole bean</a><a href="products.html">ground coffee</a><a href="products.html">k-cups</a><a href="products.html">sale</a></div></li><li><a href="#">coffee box</a></li><li><a href="wholesale.html">wholesale</a></li><li><a href="story.html">our story</a></li></ul>');
}
window.addEventListener('resize', function () {
if ($( window ).width() < 754) {
$('.nav-left').replaceWith('<ul class="nav-left"><li><a href="javascript:void(0)" onclick="openNav()" id="menu-button"><div id="menu-icon"><span></span><span></span><span></span></div> <p class="mono">&nbsp;menu</p></a></li></ul>');
}
else {
$('.nav-left').replaceWith('<ul class="nav-left"><li class="drop"><a href="products.html" class="drop-text">shop</a><div class="drop-links"><a href="products.html">whole bean</a><a href="products.html">ground coffee</a><a href="products.html">k-cups</a><a href="products.html">sale</a></div></li><li><a href="#">coffee box</a></li><li><a href="wholesale.html">wholesale</a></li><li><a href="story.html">our story</a></li></ul>');
}
});
window.addEventListener('scroll', function() {
  if ($( window ).width() < 754){
  if ($(window).scrollTop() > 30){
    $('.logo-big').fadeOut(100);
    $('.logo').fadeIn(1000);
  }
  else {
    $('.logo').fadeOut(200);
    $('.logo-big').slideDown(500);
  }} else {
    $(".logo-big").css("display", "none");
    $(".logo").css("display", "block");
  }
  });
$('#menu-button').click(function(){
    $('#menu-icon').toggleClass('open');
    $("#mySidenav").toggleClass('open-width');
    if ($(window).scrollTop() > 30){
      $('.nav').toggleClass("nav-shadow");
    } else if  ($(window).scrollTop() < 30) {
      $('.logo-big').slideToggle(500);
      $('.logo').fadeToggle(200);
    }
  });

$(window).scroll(function(){
if ($(window).scrollTop() > 30){
    $('.nav').addClass( "nav-shadow");
}
else {
  $('.nav').removeClass("nav-shadow");
}
});

});

function checkSize(){
    if ($("main").css("padding-top") == "125px" ){
        $('main').css('padding-top', '95px');
    } else {
        $('main').css('padding-top', '200px');
    }
}
function checkMobile(){
  if ($("nav").css("margin-bottom") == "10px" ){
      //do nothing
  } else {
      $('main').css('padding-top', '200px');
  }
}
