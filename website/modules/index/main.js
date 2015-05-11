$(function() {

    $(window).scroll(function() {
        console.log($(window).height());
        console.log($(document).scrollTop());
        if($(document).scrollTop() >= 380 && $(document).scrollTop() <= 500) {
            // $("#nav").fadeIn(1000);
            // $("#nav").addClass('show');
            // console.log('123');
        }else {
            // $('#nav').fadeOut(500);            
            // $('#nav').hide();
            // $("#nav").removeClass('show');
        }
    });
});