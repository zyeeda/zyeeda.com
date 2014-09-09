var scrollEvent = function(me, evt) {
    var $anchor = $(me);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    evt.preventDefault();
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54532603-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');


$(function() {

    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    });
    wow.init();

    $('.page-scroll a').bind('click', function(event) {
        if($(this).data('url')) {
            location.href = $(this).data('url');
        }
        scrollEvent(this, event);
    });

    $('.footer-above .page-scroll').bind('click', function(event) {
        scrollEvent(this, event);
    });
});

