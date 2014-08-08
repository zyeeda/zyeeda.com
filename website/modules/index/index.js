// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var calBgHeight = function() {
    var hei = $(window).height() - 35;
    $('header').height(hei);
    $('.bg').height(hei);
}

$(function() {

    calBgHeight();

    $(window).resize(function() {
        calBgHeight();
    });

    $(window).scroll(function() {
        if($(document).scrollTop() >= $(window).height() - 110) {
            $("#nav").fadeIn(500);
        }else {
            // $('#nav').fadeOut(500);            
            $('#nav').hide();
        }
    }); 
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});

window.onload = function() {
    $('#index-effect').removeClass('effect-lager').addClass('effect-lager');
}