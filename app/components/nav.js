/**
 *
 * Created by vimniky on 4/18/16.
 */

import React from 'react'
import $ from "jquery";
import animate from "animate.css"
import NavLink from './NavLink';
import Utils from "./Utils"

const ACTIVE = { borderBottom : "2px solid red" , paddingBottom:"2px" };
export default React.createClass({
    componentDidMount() {
        $('#nav-bar').slideUp(100);
        Utils.scrollDetect(function(){
            $('#nav-bar').slideDown();
        } , function() {
        });
    },
    render() {
        console.log(animate);
        return(
            <div className="nav-bar" id="nav-bar">
                <NavLink to="/" activeStyle={ACTIVE} onlyActiveOnIndex={true}>
                    <img className="logo" src="../images/logo/logo.svg" alt="logo" />
                    {/*
                     <img className="logo" src={getUrl()==="/" ? "../images/logo/logo-white.svg" : "../images/logo/logo.svg"} alt="logo" />
                    */}
                </NavLink>
                <ul role="nav" className="nav-link" >
                    <li><NavLink activeStyle={ACTIVE}  to="/" onlyActiveOnIndex={true}>首页</NavLink></li>
                    <spin className="spaceMaker">|</spin>
                    <li ><NavLink activeStyle={ACTIVE} to="/joinus">加入我们</NavLink></li>
                    <span className="spaceMaker">|</span>
                    <li ><NavLink activeStyle={ACTIVE}  to="/aboutus">关于我们</NavLink></li>
                </ul>
            </div>
        );
    }
});

