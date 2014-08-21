var scrollEvent = function(me, evt) {
    var $anchor = $(me);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    evt.preventDefault();
}

$(function() {

    $('.page-scroll a').bind('click', function(event) {
        scrollEvent(this, event);
    });

    $('.footer-above .page-scroll').bind('click', function(event) {
        scrollEvent(this, event);
    });

    $(window).on('load', function() {
        // $('.loading').hide();
        // $('body').css('overflow-y', 'auto');
        
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            selector: ''
        });
        
        // google-analytics
        (function(b, o, i, l, e, r) {
            b.GoogleAnalyticsObject = l;
            b[l] || (b[l] =
                function() {
                    (b[l].q = b[l].q || []).push(arguments)
                });
            b[l].l = +new Date;
            e = o.createElement(i);
            r = o.getElementsByTagName(i)[0];
            e.src = '//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e, r)
        }(window, document, 'script', 'ga'));
        ga('create', 'UA-XXXXX-X');
        ga('send', 'pageview'); 
    });

});

var changeNav = function() {
    $("#nav").addClass('show').css('position', 'absolute');
    $('#nav li a[href="#qualifications"]').attr('href', '/');
    $('#nav li a[href="#platform"]').attr('href', 'platform.html');
    $('#nav li a[href="#scheme"]').attr('href', 'scheme.html');
}

