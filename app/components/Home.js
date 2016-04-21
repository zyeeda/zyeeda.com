/**
 *
 * Created by vimniky on 4/15/16.
 */

import React from 'react'
import Header from "./Header";
import Utils from "./Utils"

const Home = React.createClass({
    componentDidMount() {
        const root = document.getElementById('root');
        Utils.transitionOpacity(root);
        Utils.setDocTitle('中昱达');
    },
    render() {
        return (
            <div className="home">
                <ul>
                    <li className="tw pure-g">
                        <img className="gif-bg" src="../images/home/bg-1.gif" />
                        <div className="loc pure-u-1 pure-u-lg-1-2">
                            <img  src="../images/home/loc-tw.png"/>
                        </div>
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <div className="text-wrap" id="text-wrap">
                                <p>我们在</p>
                                <h1 style={{color :'#c41534'}}>台湾</h1>
                                <p>专注产品采购及源头审查！</p>
                                <p><span>寻找台湾本地最优产品</span></p>
                                <p><span>对供应商资质进行严格审查</span></p>
                                <p><span>签订战略合作协议，从正规品牌渠道采购并获得授权 </span></p>
                                <p><span>承诺100%正品保证。只为您的信赖！</span></p>
                            </div>
                        </div>
                    </li>

                    <li className="hk pure-g">
                        {/*
                         <img className="gif-bg" src="../images/home/bg-2.gif"/>
                        */}
                        <img className="gif-bg" src="../images/home/bg-2.gif"/>
                        <div className="loc pure-u-1 pure-u-lg-1-2">
                            <img src="../images/home/loc-hk.png" alt="hk"/>
                        </div>
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <div className="text-wrap" id="text-wrap">
                                <p>我们在</p>
                                <h1 style={{color :'#C050CE'}}>香港</h1>
                                <p>专注产品仓储和物流管理！</p>
                                <p><span>先进的管理平台</span></p>
                                <p><span>实现跨境商品在仓储库存海关对接、物流运输的全方位管理</span></p>
                                <p><span>极速提升供应链管理效率，完美保证产品品质</span></p>
                                <p><span>只为您的时间！</span></p>
                            </div>
                        </div>

                    </li>
                    <li className="sz pure-g">
                        <img className="gif-bg" src="../images/home/bg-1.gif" alt=""/>
                        <div className="loc pure-u-1 pure-u-lg-1-2">
                            <img src="../images/home/loc-sz.png" alt="sz"/>
                        </div>
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <div className="text-wrap" id="text-wrap">
                                <p>我们在</p>
                                <h1 style={{color :'#c7b182'}}>深圳</h1>
                                <p>专注平台建设和客户服务！</p>
                                <p><span>汇聚创新之城的先进技术</span></p>
                                <p><span>让您在全国各地都能方便快捷的收获来自台湾的馈赠</span></p>
                                <p><span>专业贴心细致的客户服务让您无后顾之忧</span></p>
                                <p><span>只为您的欢心！</span></p>
                            </div>
                        </div>

                    </li>

                </ul>
            </div>
        );
    }
});

export default React.createClass({

    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>

        );
    }
});


