import React , {Component} from "react";
import Utils from "./Utils"
import $ from "jquery"

let regs = {
    name :/^[\w|\s]{2,24}$/,
    email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
    // email : /^\w{1,20}@\w{1,20}\.\w{2,5}$/,
    phone :/^\d{11}$/,
    description :/[\w|\s]{20,400}/
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
            console.log('form content :' , result);
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
                        <div className="pure-u-1 pure-u-md-1-2">
                            <img src="../images/about/us.png" alt="关于我们"/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <div className="text-wrap">
                                <h1>关于我们</h1>
                                <p>
                                    深圳市中昱达信息技术有限责任公司（以下简称中昱达公司）成立于2007年
                                    10月，办公地点设立在福田区新天世纪CBC。
                                </p>
                                <p>
                                    自成立以来，中昱达一直坚持“以市场为导向，以客户为中心”的经营理念
                                    中昱达为您提供开发平台产品服务、项目定制开发解决方案和人才服务。
                                    中昱达成立至今，已成功为多家客户提供项目定制开发解决方案，覆盖到电
                                    力、通信、金融等行业。
                                </p>
                                <p>
                                    中昱达长期为企业提供人才服务，针对客户人员需求，快速培养和提供相关
                                    人才到客户现场。使客户只需关注生产，不需要在人员人事管理上耗费过多
                                    精力，从而有更多精力专注于提高自身的核心竞争力上。
                                </p>
                                <p>
                                    企业文化：爱人敬业<br/>
                                    企业使命：“让软件因为我们的存在而变得更美好” <br/>
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="pure-g prods">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <div className="text-wrap">
                                <h1>我们做什么</h1>
                                <p>
                                    中昱达为客户提供开发平台产品服务、项目定制开发解决方案和人才服务。成立至今，已成功为多家企业提供优质的服务，覆盖到电力、通信、金融等行业。中昱达提供基于企业级应用的快速开发平台及其相关服务。
                                </p>
                                <p>
                                    公司的产品、服务正尽最大可能帮助中国软件开发团队生产出高质量的产品，为各行业的信息化建设加油助力。中昱达长期为企业提供人才服务，针对客户人员需求快速培养，提供相关人才到客户现场。使客户只需关注生产，不需要在人员人事管理上耗费过多精力，从而有更多时间专注于提高自身的核心竞争力上。
                                </p>
                            </div>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-2">
                            <img src="../images/about/prods.png" alt="我们做什么"/>
                        </div>
                    </li>

                    <li className="pure-g form time-line">
                        <div className="pure-u-1">
                            <h1>我们的资质</h1>
                        </div>
                        <div className="pure-u-1">
                            <img src="../images/about/time-line.png" alt="公司发展历程"/>
                        </div>
                    </li>

                    <li className="pure-g form">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <div className="text-wrap">
                                <h2>请填写您的需求与建议</h2>
                                <p>
                                    感谢您来到中昱达,若您有合作意向,请为我们留言或使用以下方式联系我们,我们将尽快给您回复,并为您提供真诚的服务. 谢谢 !
                                </p>
                                    <UserInput ref="name" type="text" name="name"  placeholder="您的姓名"/>
                                    <UserInput ref="phone" type="text" name="phone"  placeholder="您的电话" />
                                    <UserInput ref="email" type="text" name="email" placeholder="您的邮箱" />
                                <p>
                                    <textarea onBlur={UserInput.onBlur} onChange={UserInput.onChange} ref="textarea" name="description" placeholder="您的详细要求: 20 ~ 200 字">
                                    </textarea>
                                </p>
                                    <p>
                                        <button onClick={UserInput.send}>完成发送</button>
                                    </p>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <img src="../images/about/map.png" alt="关于我们"/>
                        </div>

                    </li>
                </ul>

            </div>
        );
    }
});
