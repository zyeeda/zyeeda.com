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

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

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

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

window.onload = function() {
    $('#index-effect').removeClass('effect-lager').addClass('effect-lager');
}

