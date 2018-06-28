    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
var trigger2 = document.querySelector(".trigger2");
    var closeButton = document.querySelector(".close-button");


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
    $('#fullpage').fullpage({
      verticalCentered: false,
      scrollBar: true,
      autoScrolling: false,
      fitToSection: false,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#MainNav'

    });
    var windowHeight = $(window).height();
    $(document).scroll(function() {
    $('#to-top').toggle($(this).scrollTop() > windowHeight-300);
    });
    });

    function toggleModal() {
        modal.classList.toggle("show-modal");
        $("#modalfade").fadeToggle(750);
        $(".socials").fadeToggle(750);
        $(".intro").fadeToggle(750);
        $(".slug").fadeToggle(750);
        $(".portfolio-btn").fadeToggle(750);
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }


    trigger.addEventListener("click", toggleModal);
 trigger2.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
