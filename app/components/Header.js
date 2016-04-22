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

// $('#header .container').hover((event) => {
//     console.log(event);
// });

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

