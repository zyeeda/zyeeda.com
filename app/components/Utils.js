/**
 *
 * Created by vimniky on 4/20/16.
 */

import $ from "jquery";
export default {
    transitionOpacity( elm ) {
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
     * @param container : scroll container on where scroll happens
     */
    scrollDetect(f1 , f2 ) {
        let count = 0;
        $( window ).scroll(function() {
           if(count !=0 ) {
               console.log('start');
               f1();
           }
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                if(count !=0 ) {
                    f2();
                    console.log('stop');
                }
                count++;
            }, 250) );
        });
    }

}
