/**
 *
 * Created by vimniky on 4/20/16.
 */

import $ from "jquery";

export default {
    transitionOpacity( elm ) {
        $(document).scrollTop(0);
        elm.style.opacity = 0;
        setTimeout(() => {
            this.incOpacity(elm);
        } , 200);
    },
    incOpacity( elm ) {
        let value = 0 ;
        let timer = setInterval(() => {
            if( value <= 1 ) {
                value +=  0.03;
                elm.style.opacity = value ;
            }else{
                elm.style.opacity = 1;
                clearInterval(timer);
            }
        } , 20);
    },
    setDocTitle(title) {
        document.title = title;
    },

    /**
     * @param f1 : scroll start callback
     * @param f2 : scroll stop callback
     */
    scrollDetect(f1 , f2 ) {
        let count = 0;
        let initScroll = $(document).scrollTop();
        $( window ).scroll(function() {
           if(count !=0 || initScroll===0) {
               f1();
           }
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                if(count !=0 || initScroll===0) {
                    f2();
                }
                count++;
            }, 250) );
        });
    }

}

$.fn.vibrate = function (conf) {
    var config = $.extend({
        duration:    1000,
        speed:        30,
        spread:        3
    }, conf);

    return this.each(function () {
        var t = $(this);

        var vibrate = function () {
            var topPos    = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
            var leftPos    = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
            var rotate    = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
            t.css({
                position:            'relative',
                left:                leftPos + 'px',
                top:                topPos + 'px',
                WebkitTransform:    'rotate(' + rotate + 'deg)'  // cheers to erik@birdy.nu for the rotation-idea
            });
        };

        var doVibration = function () {
            var vibrationInterval = setInterval(vibrate, config.speed);

            var stopVibration = function () {
                clearInterval(vibrationInterval);
                t.css({
                    position:            'static',
                    WebkitTransform:    'rotate(0deg)'
                });
            };

            setTimeout(stopVibration, config.duration);
        };
        doVibration();
    });
};

/**
 * do something base on the period of hover time
 * @param options
 * @returns dom element which have just been hovered
 */
$.fn.delayedHover = function(options)
{
    var settings = $.extend(
        {},
        {
            delayedAction : function(){},
            cancelledAction: function(){},
            hoverTime: 1000
        },
        options);

    return this.each(function(){
        var $this = $(this);
        $this.hover(function(){
                $this.data('timerId',
                    setTimeout(function(){
                        $this.data('hover',false);
                        settings.delayedAction($this);
                    },settings.hoverTime));
                $this.data('hover',true);
            },
            function(){
                if($this.data('hover')){
                    clearTimeout($this.data('timerId'));
                    settings.cancelledAction($this);
                }
                $this.data('hover',false);
            } );
    });
};
