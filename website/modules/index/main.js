var changeColor = function() {
    $('.nav-right ul li a').each(function(element, index){
        var top = $(this).offset().top;
        var state = $('.carousel-inner .item').eq(1).hasClass('active'); 
        if(top >= 638 && top <= 1300) {
            $(this).addClass('toggle-color');
            $(this).find('div').addClass('toggle-border');
        } else if(top > 1300 && state) {
            $(this).addClass('toggle-color');
            $(this).find('div').addClass('toggle-border');
        } else {
            $(this).removeClass('toggle-color');
            $(this).find('div').removeClass('toggle-border');
        }
    });
}

var toggleColor = function() {
    var state = $('.carousel-inner .item').eq(1).hasClass('active'); 
    $('.nav-right ul li a').each(function(element, index){
        var top = $(this).offset().top;
        if(state) {
            if(top > 1300) {
                $(this).addClass('toggle-color');
                $(this).find('div').addClass('toggle-border');
                $('.nav-right ul li:last-child a div').css('background-color', '#FFF');
            }
        } else {
            $(this).removeClass('toggle-color');
            $(this).find('div').removeClass('toggle-border');
            $('.nav-right ul li:last-child a div').css('background-color', '#777886');
        }
    });
}

var changeProgressPoint = function() {
    var top = $(document).scrollTop();
    var state = $('.carousel-inner .item').eq(1).hasClass('active');

    if(top >= 0 && top < 348) {
        setBackground();
        $('.nav-right ul li:eq(1) a div').css('background-color', '#777886');
    } else if( top >= 348 && top < 980) {
        setBackground();
        $('.nav-right ul li:eq(2) a div').css('background-color', '#FFF');
    } else {
        if(state) {
            setBackground();
            $('.nav-right ul li:last-child a div').css('background-color', '#FFF');
        } else {
            setBackground();
            $('.nav-right ul li:last-child a div').css('background-color', '#777886');
        }
    }
}

var setBackground = function() {
    $('.nav-right ul li a div').each(function() {
        $(this).css('background-color', 'transparent');
    });
}

$(function() {
    changeColor();

    changeProgressPoint();

    $(window).on('scroll', function() {
        changeColor();
        changeProgressPoint();
    });

    $('#carousel-smartcity').on('slid.bs.carousel', function(){
        toggleColor();
    });

    $('#nav').addClass('show');

    $(window).on('load', function() {
        $('#nav #index-li').addClass('active');
        $('#index-effect').removeClass('effect-small').addClass('effect-lager');
    });
});