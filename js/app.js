// for scrolling that is smoother than jazz.
$("a").on('click', function(event) { // when an anchor is clicked.

    if (this.hash !== "") { // if it has a hashtag in the href link.
        event.preventDefault();
        var hash = this.hash; // the variable hash is set to the link.

        $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){
            window.location.hash = hash; // the page scrolls to the corresponding id tag smoother than creamy peanut butter.
        });
    }
});

$(".hover-home").hover(function() { // Mouse over
  $(".hover-home").addClass('highlight-home');
  $( ".frame" ).addClass('frame-home');
  $(".nav-active").addClass('underline-off');
  $(".about a").addClass('quiet-links');
  $(".nav-active-about").addClass('underline-off');
  $(".nav-active-work").addClass('underline-off');

}, function() { // Mouse out
      $(".hover-home").removeClass('highlight-home');
      $( ".frame" ).removeClass('frame-home');
      $(".about a").removeClass('quiet-links');
      $(".nav-active").removeClass('underline-off');
      $(".nav-active-about").removeClass('underline-off');
      $(".nav-active-work").removeClass('underline-off');
});

$(".hover-about").hover(function() { // Mouse over
  $(".hover-about").addClass('highlight-about');
  $( ".frame" ).addClass('frame-about');
  $(".nav-active").addClass('underline-off');
  $(".nav-active-work").addClass('underline-off');
}, function() { // Mouse out
      $(".hover-about").removeClass('highlight-about');
      $( ".frame" ).removeClass('frame-about');
      $(".nav-active").removeClass('underline-off');
      $(".nav-active-work").removeClass('underline-off');
});

$(".hover-work").hover(function() { // Mouse over
  $(".hover-work").addClass('highlight-work');
  $( ".frame" ).addClass('frame-work');
  $(".nav-active").addClass('underline-off');
  $(".about a").addClass('quiet-links');
  $(".nav-active-about").addClass('underline-off');
}, function() { // Mouse out
  $(".hover-work").removeClass('highlight-work');
      $( ".frame" ).removeClass('frame-work');
      $(".about a").removeClass('quiet-links');
      $(".nav-active").removeClass('underline-off');
      $(".nav-active-about").removeClass('underline-off');
});

$(".hover-play").hover(function() { // Mouse over
  $(".hover-play").addClass('highlight-play');
  $( ".frame" ).addClass('frame-play');
  $(".nav-active").addClass('underline-off');
  $(".about a").addClass('quiet-links');
  $(".nav-active-about").addClass('underline-off');
  $(".nav-active-work").addClass('underline-off');
}, function() { // Mouse out
  $(".hover-play").removeClass('highlight-play');
      $( ".frame" ).removeClass('frame-play');
      $(".about a").removeClass('quiet-links');
      $(".nav-active").removeClass('underline-off');
      $(".nav-active-about").removeClass('underline-off');
      $(".nav-active-work").removeClass('underline-off');
});
