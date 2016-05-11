/**
 *
 * Created by vimniky on 4/17/16.
 */

import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className='footer' id='footer'>
                <div className="infos">
                    <div >
                        <img src="../images/home/map.png"/>
                    </div>
                    <div >
                        <img className="logo" src="../images/logos/logo-white.svg"/>
                    </div>
                    <div >
                        <p></p>
                        <div>
                            <p>深圳中昱达信息技术有限责任公司</p>
                            <p >电话: 4008226278</p>
                        </div>
                        <p></p>
                    </div>
                    <div >
                        <p>地址: 深圳市罗湖区怡景路2008号国家动漫画产业基地A区305室 (邮编518021) </p>
                        <p >传真: 0755-26966586-802</p>
                    </div>
                </div>
               <p className="copy-right">
                  Copyright © 2007 - 2016 深圳市中昱达信息技术有限责任公司 - Designed by Zyeeda Co. Ltd. <br/>
                 <a href='http://www.miibeian.gov.cn/' target="_blank">
                   粤ICP备15099651
                 </a>
               </p>
            </div>
        );
    }
});
