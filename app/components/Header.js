/**
 * 
 * Created by vimniky on 4/17/16.
 */

import React,{Component} from 'react';
import $ from 'jquery';

const hpList = [
    {className : 'ptw'},
    {className : 'phk'},
    {className : 'psz'}
];
// <img src="../images/home/hot-point.gif" />
class HotPoints extends Component {

    getHotpoints() {
        return  this.props.hpList.map((p) => {
            return <li key={p.className} className={'container ' + p.className}>
                <div className="dot"></div>
                <div className="pulse"></div>
            </li>;
        });
    }
    render() {
        return <ul className="hp-wrap"> { this.getHotpoints() } </ul>;
    }
}

$('.hot-point').hover(() => {

});

// <div className="hp-wrap">
//     <div className="container tw">
//         <div className="popup"></div>
//         <div className="dot"></div>
//         <div className="pulse"></div>
//     </div>
// </div>

// <HotPoints hpList={hpList}/>
 export default React.createClass({
    render() {
        return (
            <div id="header" >
                <img className="banner" src="../images/home/big-banner.jpg" alt=""/>
                <HotPoints hpList={hpList}/>
            </div>
        );
    }
});

