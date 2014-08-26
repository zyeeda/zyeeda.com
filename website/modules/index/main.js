var calBgHeight = function() {
    var hei = $(window).height();
    $('header').height(hei);
    $('.bg').height(hei);
}

$(function() {
    // calBgHeight();

    // $(window).resize(function() {
    //     calBgHeight();
    // });
    
    $('#mouse').bind('click', function(event) {
        scrollEvent(this, event);
    });

    var num = $(window).height() - 150;

    $(window).scroll(function() {
        if($(document).scrollTop() >= num) {
            // $("#nav").fadeIn(1000);
            $("#nav").addClass('show');
        }else {
            // $('#nav').fadeOut(500);            
            // $('#nav').hide();
            $("#nav").removeClass('show');
        }
    }); 

    $(window).on('load', function() {
        $('#index-effect').removeClass('effect-small').addClass('effect-lager');
    });
});
