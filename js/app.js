
// for scrolling that is smoother than jazz.
$("a").on('click', function(event) { // when an anchor is clicked.

    if (this.hash !== "") { // if it has a hashtag in the href link.
        event.preventDefault();
        var hash = this.hash; // the variable hash is set to the link.

        $('html, body').animate({scrollTop: $(hash).offset().top}, 600, "swing", function(){
            window.location.hash = hash; // the page scrolls to the corresponding id tag smoother than creamy peanut butter.
        });
    }
});

    var modal = document.querySelector(".modal");
    var pageScroll = document.querySelector("body");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var trigger2 = document.querySelector(".trigger2");


    $(document).ready(function(){
      $('.spin0').on('hover', function(){
    $('#spin-in0').toggleClass('show0');
});$('.spin1').on('hover', function(){
$('#spin-in1').toggleClass('show1');
});$('.spin2').on('hover', function(){
$('#spin-in2').toggleClass('show2');
});$('.spin3').on('hover', function(){
$('#spin-in3').toggleClass('show3');
});
    //super sassy back to top button

    var windowHeight = $(window).height();
    $(document).scroll(function() {
    $('#to-top').toggle($(this).scrollTop() > windowHeight-300);
    });
    });

    function toggleModal() {
        modal.classList.toggle("show-modal");
        pageScroll.classList.toggle("hide-scroll");
        $("#modalfade").fadeToggle(850);
        $(".nav-social").fadeToggle(850);
        $(".index-slug").fadeToggle(850);
        $(".scroll-portfolio").fadeToggle(850);
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    trigger2.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
