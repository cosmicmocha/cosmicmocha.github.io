$(document).ready(function(){

  $('#english').click(function() {
    $(".english").fadeIn(1200);
    $(".french").css("display", "none");
  });

  $('#french').click(function() {
    $(".english").css("display", "none");
    $(".french").fadeIn(1200);
  });

});
