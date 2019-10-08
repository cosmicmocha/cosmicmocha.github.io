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

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("#scroll-icon").style.color = "#000";
  } else {
    document.getElementById("scroll-icon").style.color = "#fff";
  }
  prevScrollpos = currentScrollPos;
}

$(".hover-about").hover(function() { // Mouse over
  $(".hover-about").addClass('highlight-about');
  $( ".frame" ).addClass('frame-about');
  $( ".frame" ).removeClass('frame-home');
  $(".index-active").addClass('quiet-links');
  $(".index-active").removeClass('highlight-home');
  $(".hover-work").addClass('quiet-links')
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
      $(".hover-about").removeClass('highlight-about');
      $( ".frame" ).addClass('frame-home');
      $( ".frame" ).removeClass('frame-about');
      $(".index-active").addClass('highlight-home');
      $(".index-active").removeClass('quiet-links');
      $(".hover-work").removeClass('quiet-links')
      $(".hover-play").removeClass('quiet-links')

});
$(".hover-index-about").hover(function() { // Mouse over
  $( ".frame" ).addClass('frame-about');
  $( ".frame" ).removeClass('frame-home');
  $(".index-active").addClass('quiet-links');
  $(".index-active").removeClass('highlight-home');
  $(".hover-work").addClass('quiet-links')
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
      $( ".frame" ).addClass('frame-home');
      $( ".frame" ).removeClass('frame-about');
      $(".index-active").addClass('highlight-home');
      $(".index-active").removeClass('quiet-links');
      $(".hover-work").removeClass('quiet-links')
      $(".hover-play").removeClass('quiet-links')

});

$(".hover-work").hover(function() { // Mouse over
  $(".hover-work").addClass('highlight-work');
  $( ".frame" ).addClass('frame-work');
  $( ".frame" ).removeClass('frame-home');
  $(".index-active").addClass('quiet-links');
  $(".index-active").removeClass('highlight-home');
  $(".hover-about").addClass('quiet-links');
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
  $(".hover-work").removeClass('highlight-work');
  $( ".frame" ).addClass('frame-home');
  $( ".frame" ).removeClass('frame-work');
  $(".index-active").removeClass('quiet-links');
  $(".index-active").addClass('highlight-home');
  $(".hover-about").removeClass('quiet-links');
  $(".hover-play").removeClass('quiet-links')
});
$(".hover-index-work").hover(function() { // Mouse over
  $( ".frame" ).addClass('frame-work');
  $( ".frame" ).removeClass('frame-home');
  $(".index-active").addClass('quiet-links');
  $(".index-active").removeClass('highlight-home');
  $(".hover-about").addClass('quiet-links');
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
  $( ".frame" ).addClass('frame-home');
  $( ".frame" ).removeClass('frame-work');
  $(".index-active").removeClass('quiet-links');
  $(".index-active").addClass('highlight-home');
  $(".hover-about").removeClass('quiet-links');
  $(".hover-play").removeClass('quiet-links')
});

$(".hover-play").hover(function() { // Mouse over
  $(".hover-play").addClass('highlight-play');
  $( ".frame" ).addClass('frame-play');
  $( ".frame" ).removeClass('frame-home');
  $(".index-active").addClass('quiet-links');
  $(".index-active").removeClass('highlight-home');
  $(".hover-about").addClass('quiet-links');
  $(".hover-work").addClass('quiet-links');

}, function() { // Mouse out
  $(".hover-play").removeClass('highlight-play');
  $( ".frame" ).addClass('frame-home');
      $( ".frame" ).removeClass('frame-play');
      $(".hover-about").removeClass('quiet-links');
      $(".index-active").removeClass('quiet-links');
      $(".index-active").addClass('highlight-home');
      $(".hover-work").removeClass('quiet-links');

});

$('#contrast').on('click', function() {

    // retrieve current state, initially undefined
    var state = $(this).data('state');

    // toggle the state - first click will make this "true"
    state = !state;

    // do your stuff
    if (state) {
        // do this (1st click, 3rd click, etc)
        $('body').addClass('dark-mode');
    } else {
        // do that
        $('body').removeClass('dark-mode');
    }

    // put the state back
    $(this).data('state', state);
});
