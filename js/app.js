// Shrinking menubar and modal stuff
// Pace Marier - Personal Website

(function($) {
  "use strict";

  // Make the top menu bar collapsible
  var navbarCollapse = function() {
    if ($("#menubar").offset().top > 100) { // if the user scrolls down
      $("#menubar").addClass("navbar-shrink"); // shrink the menu bar
    } else {
      $("#menubar").removeClass("navbar-shrink"); //else keep the big menu bar
    }
  };

  // if the user is not at the top of the page shrink the menu
  navbarCollapse();

  // shrink the nav bar when the user scrolls
  $(window).scroll(navbarCollapse);

  // when the user clicks on a portfolio modal
  // hide the navigation bar until they close the modal
  $('.port-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.port-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery);
