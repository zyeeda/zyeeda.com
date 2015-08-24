var changeColor = function() {
    $('.nav-right ul li a').each(function(element,index) {
        var top = $(this).offset().top;
        if(element == 0) {
            if((top >= 642 && top < 1300) || (top >= 1965 && top < 2638)) {
                $(this).css('color','#FFF');
            } else {
                $(this).css('color','#777886');
            }
        }
        if(top >= 0 && top < 642) {
            $(this).find('div').removeClass('toggle-border');
            $(this).find('div').css('background-color','transparent');
            if(element == 1){
                $('.nav-right ul li a:eq(1) div').css('background-color','#777886');
            }
        } else if(top >= 642 && top < 1300) {
            $(this).find('div').addClass('toggle-border');
            $(this).find('div').css('background-color','transparent');
            if(element == 2) {
                $('.nav-right ul li a:eq(2) div').css('background-color','#FFF');
            }
        } else if(top >= 1300 && top< 1960 ) {
            $(this).find('div').removeClass('toggle-border');
            $(this).find('div').css('background-color','transparent');
            if(element == 3) {
                $('.nav-right ul li a:eq(3) div').css('background-color','#777886');            
            }
        } else if(top >= 1965 && top < 2638) {
            $(this).find('div').addClass('toggle-border');
            $(this).find('div').css('background-color','transparent');
            if(element == 4) {
                $('.nav-right ul li a:eq(4) div').css('background-color','#FFF');
            }
        } else {
            $(this).find('div').removeClass('toggle-border');
            $(this).find('div').css('background-color','transparent');
            if(element == 5) {
                $('.nav-right ul li a:eq(5) div').css('background-color','#777886');
            }
        }
    });
}

/*var adaptWidth = function() {
    var width = ($(window).width() > 1400) ? 1400 : $(window).width();
    $('.content').css('width', width);
    $('.nav-right').css('margin-left', (width/2)-125);
}*/

$(function() {
    // adaptWidth();

    changeColor();

    /*$(window).resize(function(){
        adaptWidth();
    });*/

    $(window).on('scroll', function() {
        changeColor();
    });

    $('#nav').addClass('show');

    $(window).on('load', function() {
        $('#nav #index-li').addClass('active');
        $('#index-effect').removeClass('effect-small').addClass('effect-lager');
    });
});
