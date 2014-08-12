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
    var hei = $(window).height();
    $('header').height(hei);
    $('.bg').height(hei);
}

$(function() {
    calBgHeight();

    $(window).resize(function() {
        calBgHeight();
    });

    var num = $(window).height() - 150;

    $(window).scroll(function() {
        // var p = parseInt(num / $(document).scrollTop()) / 10;
        // console.log(111, p);
        // if(isNaN(p) || p >= 1 || p < 0) {
        //     $('#nav').css('background-color', 'rgba(255, 255, 255, 0)');
        //     $('#nav').css('border-color', 'rgba(236, 236, 236, 0)');
        //     $('header').css('opacity', 1);
        // }else {
        //     $('#nav').css('background-color', 'rgba(255, 255, 255,' + (1 - p) + ')');
        //     $('#nav').css('border-color', 'rgba(236, 236, 236,' + (1 - p) + ')');
        //     $('header').css('opacity', p);
        // }
        if($(document).scrollTop() >= num) {
            // $("#nav").fadeIn(1000);
            $("#nav").addClass('show');
        }else {
            // $('#nav').fadeOut(500);            
            // $('#nav').hide();
            $("#nav").removeClass('show');
        }
    }); 
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});

window.onload = function() {
    $('#index-effect').removeClass('effect-small').addClass('effect-lager');
    // skrollr.init();
}