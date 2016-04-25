import React , {Component} from "react";
import Utils from "./Utils"
import $ from "jquery"

let regs = {
    name :/^([\u4e00-\u9fa5]|[a-zA-Z]|\s){2,24}$/,
    email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
    // email : /^\w{1,20}@\w{1,20}\.\w{2,5}$/,
    phone :/^\d{11}$/,
    description :/(.|\s){5,400}/
};
const validCss = {borderColor :'#e1e1e1'};
const invalidCss = {borderColor :'red'};
const succBtnCss = {background :'#9DDB9C'};
const normalBtnCss = {background : '#c31632'} ;

class UserInput extends Component {
    static onChange(event) {
        $(event.target).css(validCss);
        $('.about button').css(normalBtnCss).html('完成发送');
    }
    static check(value , fileName) {
        return regs[fileName].test(value.trim());
    }
    static onBlur(event) {
        if ( !UserInput.check(event.target.value , event.target.name) ) {
            $(event.target).css(invalidCss);
        }
    }
    static send() {
        let validInputs = [];
        let invalidInputs = [];
        let result = {};
        $('.about input ,.about textarea').each((index , item) =>{
            if( UserInput.check(item.value , item.name) ) {
                validInputs.push(item);
                result[item.name] = item.value;
            }else {
                invalidInputs.push(item);
            }
        });
        let btn = $('.about button');
        if(invalidInputs.length != 0) {
            btn.vibrate({duration:200});
            btn.css(normalBtnCss).html('完成发送');
        }else {
            btn.css(succBtnCss).html("已发送");
            $('.about input ,.about textarea').val('');

            setTimeout(function() {
                btn.css(normalBtnCss).html('完成发送');
            }, 2000)
        }
        $(validInputs).css(validCss);
        $(invalidInputs).css(invalidCss);
    }
    render() {
        return (
            <p>
                <input onBlur={UserInput.onBlur} onChange={UserInput.onChange} {...this.props} />
            </p>
        );
    }
}

export default React.createClass({
    componentDidMount() {
        const root = document.getElementById('root');
        Utils.transitionOpacity(root);
        Utils.setDocTitle('中昱达-关于我们');
    },
    render() {
        return (
            <div className="about" id="about">
                <ul>
                    <li className="pure-g about-us">
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <img src="../images/about/us.png" alt="关于我们"/>
                        </div>
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <div className="text-wrap">
                                <h1>关于我们</h1>
                                <p>
                                    深圳市中昱达信息技术有限责任公司成立于2007年10月，在香港和台湾设立分公司。中昱达公司致力于打造两岸快销品电商贸易交易平台。通过先进的跨境电商平台，海峡两岸的仓储、物流运输管理，通过与海关接口集成和极速供应链管理，从而实现两岸供销电商化、一体化、便捷化。
                                </p>
                                <p>
                                    公司致力于为消费者提供快捷、高品质、值得信赖的台湾正品贸易体验，深入货源产地直采，保证商品品质，为顾客提供多元化种类的商品，满足各类顾客的需要，让每一位顾客在追寻健康和美丽的路途上，享受更愉悦美好的体验。
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="pure-g daili">
                        <div className="pure-u-1">
                            <h1>我们的授权</h1>
                            <div className="daili-wrap">
                                <img src="../images/about/daili-ximi.jpg" />
                                <img src="../images/about/daili-huana.png"/>
                                <img src="../images/about/daili-nijinshi.jpg" />
                                <img src="../images/about/daili-beiwei.jpg" />
                                <img src="../images/about/daili-hualian.png" />
                            </div>
                        </div>
                    </li>
                    <li className="pure-g certifications">
                        <div className="pure-u-1">
                            <h1>我们的资质</h1>
                            <div className="certifications-wrap">
                                <img src="../images/about/certification-1.png" />
                                <img src="../images/about/certification-2.png" />
                                <img src="../images/about/certification-3.png" />
                                <img src="../images/about/certification-4.png" />
                                <img src="../images/about/certification-5.png" />
                                <img src="../images/about/certification-6.png" />
                            </div>
                        </div>
                    </li>

                    <li className="pure-g form">
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <div className="text-wrap">
                                <h2>请填写您的需求与建议</h2>
                                <p>
                                    感谢您来到中昱达,若您有合作意向,请为我们留言或使用以下方式联系我们,我们将尽快给您回复,并为您提供真诚的服务. 谢谢 !
                                </p>
                                    <UserInput ref="name" type="text" name="name"  placeholder="您的姓名"/>
                                    <UserInput ref="phone" type="text" name="phone"  placeholder="您的电话" />
                                    <UserInput ref="email" type="text" name="email" placeholder="您的邮箱" />
                                <p>
                                    <textarea onBlur={UserInput.onBlur} onChange={UserInput.onChange} ref="textarea" name="description" placeholder="您的详细要求: 5 ~ 200 字">
                                    </textarea>
                                </p>
                                    <p>
                                        <button onClick={UserInput.send}>完成发送</button>
                                    </p>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-lg-1-2">
                            <img src="../images/about/map.png" alt="关于我们"/>
                        </div>

                    </li>
                </ul>

            </div>
        );
    }
});
