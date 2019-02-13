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
  $( ".frame" ).removeClass('frame-about');
  $(".highlight-about").addClass('quiet-links');
  $( ".frame" ).addClass('frame-home');
  $(".about").addClass('quiet-links');
  $(".hover-work").addClass('quiet-links')
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
      $(".hover-home").removeClass('highlight-home');
      $( ".frame" ).addClass('frame-about');
      $(".highlight-about").removeClass('quiet-links');
      $( ".frame" ).removeClass('frame-home');
      $(".about").removeClass('quiet-links');
      $(".hover-work").removeClass('quiet-links')
      $(".hover-play").removeClass('quiet-links')
});

$(".hover-work").hover(function() { // Mouse over
  $(".hover-home").addClass('quiet-links');
  $( ".frame" ).removeClass('frame-about');
  $(".highlight-about").addClass('quiet-links');
  $( ".frame" ).addClass('frame-work');
  $(".about").addClass('quiet-links');
  $(".hover-work").addClass('highlight-work')
  $(".hover-play").addClass('quiet-links')
}, function() { // Mouse out
  $(".hover-home").removeClass('quiet-links');
  $( ".frame" ).addClass('frame-about');
  $(".highlight-about").removeClass('quiet-links');
  $( ".frame" ).removeClass('frame-work');
  $(".about").removeClass('quiet-links');
  $(".hover-work").removeClass('highlight-work')
  $(".hover-play").removeClass('quiet-links')
});

$(".hover-play").hover(function() { // Mouse over
  $(".hover-home").addClass('quiet-links');
  $( ".frame" ).removeClass('frame-about');
  $(".highlight-about").addClass('quiet-links');
  $( ".frame" ).addClass('frame-play');
  $(".about").addClass('quiet-links');
  $(".hover-work").addClass('quiet-links')
  $(".hover-play").addClass('highlight-play');

}, function() { // Mouse out
  $(".hover-home").removeClass('quiet-links');
  $( ".frame" ).addClass('frame-about');
  $(".highlight-about").removeClass('quiet-links');
  $( ".frame" ).removeClass('frame-play');
  $(".about").removeClass('quiet-links');
  $(".hover-work").removeClass('quiet-links')
  $(".hover-play").removeClass('highlight-play');

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
