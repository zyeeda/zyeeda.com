/**
 * 
 * Created by vimniky on 4/17/16.
 */

import React,{Component} from 'react';
import $ from 'jquery';

function hoverEffect(element) {
    // maintain element's reference
    (function(element){
        let className = String($(element).attr('class')).split(" ")[1];
        $('.popmap').hide();
        let e = $(`.popmap.${className}`);
        e.fadeIn(600);
        $(element).mouseleave(() => {
            e.fadeOut(400);
        });
    })(element);
}

function setCenter() {
    let eMap = $('.map-wrap');
    let eMapWidth = eMap.width();
    let tolerance = Math.abs(eMapWidth - 400);
    let centerValue = ( $(window).width() - eMapWidth ) / 2;
    if( tolerance < 10 ) {
        eMap.css( {left : centerValue} );
        // unbind event
        $('#header .container').off('mouseenter mouseleave');
    }else {
        eMap.css( {left : centerValue - 100} );
        // bind event
        $('#header .container').delayedHover({
            delayedAction : hoverEffect,
            hoverTime : 800
        });
    }
}

class HotPoints extends Component {
    render() {
        return (
            <div {...this.props}>
                <div className="dot"></div>
                <div className="pulse"></div>
            </div>
        );
    }
}

export default React.createClass({
    componentDidMount() {
        setCenter();
        hoverEffect();
        $(window).on('resize' ,(event)=> {
            setCenter();
        });

    },

    render() {
        return (
            <div id="header" style={{background:"url(../images/home/big-bg.jpg) center center no-repeat"}}>
                <div className="map-wrap">
                    <img src="../images/home/slogan.png" alt="" className="slogan"/>
                    <img src="../images/home/top-map.png" alt="" className="map"/>
                    <HotPoints className="container ptw"/>
                    <HotPoints className="container phk"/>
                    <HotPoints className="container psz"/>
                    <img src="../images/home/popmap-tw.png" alt="" className="popmap ptw"/>
                    <img src="../images/home/popmap-hk.png" alt="" className="popmap phk"/>
                    <img src="../images/home/popmap-sz.png" alt="" className="popmap psz"/>
                </div>
            </div>
        );
    }
});
