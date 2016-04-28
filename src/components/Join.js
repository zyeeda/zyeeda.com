import React, {Component} from "react";
import Utils from "./Utils";
import $ from "jquery";

const jobList = [
    {
        title : "高级电商文案",
        imgUrl: "../images/join/producer.png",
        className : "producer",
        text:"***岗位职责||1、负责公司网店的文案写作，店内活动策划，广告文案创作等||2、负责对产品进行直观、感性、富有吸引力的描述，切实提高商品的成交转换率||3、策划、撰写产品宣传文案和商品广告文案；各种促销及营销策划方案和实施方案||4、参与网店促销活动及品牌包装的创意、文案工作，协同网页美工完成广告海报的主题与软文制作||5、以公司产品为对象，了解客户需求，挖掘产品亮点与卖点，从事商品具体内容的策划和编辑，使商品描述实现多样化、内容化、品牌化||6、负责各个渠道活动策划和广告文案写作及推广||***任职资历||1、大专以上学历，大学新闻、广告或相关语言类专业，男女不限。||2、具有1-2年市场营销策划或网店文案策划工作经验，有市场推广，新品上市，品牌形象建立及维护经验|| 3、文案功底深厚，写作风格新颖；杰出的文笔和创意，诉求精准到位，作品具创造力和感染力，有市场策划及方案工作经验,擅长网络编辑及销售型方案写作,有较强的文字编辑能力和策划能力|| 4、了解消费者心理，思维活跃、时尚、具有创意性，需求独到见解，行业市场资讯敏锐|| 5、能够精准提炼产品卖点，洞悉客户心态，并创作出优秀的说明文字|| 6、工作态度积极务实，责任心强；有良好的沟通能力和团队合作精神"
    },
    {
        title : "平台运营助理",
        imgUrl: "../images/join/assistant.png",
        className : "assistant",
        text:"***岗位职责||1、平台运营，负责网站平台的日常运营，问题处理||2、网站SEO，优化网站结构，提升产品知名度||3、用户维护，平台项目的跟进，协调，推动项目执行结果||4、订单跟进、交易流程跟进||5、平台流程运作引导完善，根据日常运营，优化运营流程||6、对外合作、推广和宣传，网站合作与联盟、媒体合作等各种营销活动||***任职资历||1、具有1年以上电子商务，独立网站推广运营相关工作经验||2、个性开朗、活泼、成熟||3、较强的开拓能力，主动性强，务实，沟通、表达能力良好"
    },
    {
        title : "客服专员",
        imgUrl: "../images/join/cs.png",
        className : "cs",
        text:"***岗位职责||1、担任客服工作，通过在线工具解答客户提出的问题，正确引导客人购买商品，促成订单||2、妥善处理交易中出现的售后问题，包括售后退换货、快递查询等，耐心沟通，为客户提出合理的解决||3、碰到客户抱怨及投诉或中差评时，积极联系买家，进行有效沟通，解决问题的同时保住交易||4、需要通过电话与客人沟通，解答客户咨询，物流跟进，售后等问题 || 5、熟悉商品的各属性以及交易流程、售后条款等||***任职资历||1、中专或以上学历，熟悉化妆品者优先||2、要有1年以上客服经验，对客户服务有自己一定见解|| 3、熟悉运用办公室软件，每分钟打字50个以上|| 4、每天工作8小时，需要轮班，会有夜班"
    }
];
class Job extends Component{
    render() {
        let lines = this.props.job.text.split('||').map((string) => {
            if(string.trim().substr(0,3) !== '***') {
                return <p key={string}>{string.trim()}</p>
            } else {
                return <h3 key={string}>{string.slice(3).trim()}:</h3>
            }
        }) ;
        return (
            <li key={this.props.job.className} className={"pure-g " + this.props.job.className}>
                <div className="pure-u-1 pure-u-md-1-2 img-wrap">
                    <img src={this.props.job.imgUrl} alt={this.props.job.title}/>
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                    <div className="text-wrap">
                        <a href="mailto:hr@zyeeda.com">
                            <img className="icon-email" src="../images/join/icon-email.png" alt="给我们发邮件"/>
                        </a>
                        <h1>{this.props.job.title}</h1>
                        {lines}
                    </div>
                </div>
            </li>
        );
    }
}

class Jobs extends Component{
    render() {
        let jobs = this.props.jobList.map((item) => {
            return <Job key={item.title} job={item}/>
        });
        return (
            <ul>
                {jobs}
            </ul>
        );
    }
}
function setCenter() {
    // horizontal center
    let e = $('.banner .map-wrap');
    let center = ($(window).width() - e.width()) / 2;
    e.css({'left':center});
    // vertical center
    $('#join .img-wrap').each((index , item) => {
       let center = ($(item).height() - 270) / 2;
       $(item).css({'padding-top':center});
    });
}

export default React.createClass({
    componentDidMount() {
        const root = document.getElementById('root');
        Utils.transitionOpacity(root);
        setCenter();
        $(window).on('resize' , (event) => {
            setCenter();
        });
        Utils.setDocTitle('中昱达-加入我们');
    },
    render() {
    return (
        <div className="join" id="join">
           <div className="banner">
               <div className="team">
                   <p>
                       中昱达是一个团结的团队，我们目标一致，我们和衷共济，我们合力制胜
                   </p>
                   <p>
                       中昱达是一个快乐的团队，我们一起工作和娱乐，我们一起切磋和交流，我们一起探讨和成长
                   </p>
                   <p>
                       中昱达是一个专业的团队，精益求精是我们的追求，关注细节是我们的习惯，客户满意凝结着我们所有中昱达人的辛勤努力
                   </p>
               </div>
               <div className="map-wrap">
                   <img src="../images/join/banner.png" alt="高级开发工程师"/>
                   <div className="container">
                       <div className="dot"></div>
                       <div className="pulse"></div>
                   </div>
               </div>
           </div>
            <Jobs jobList={jobList} />
        </div>
    );
  }
})

// {
//     title : "高级开发工程师",
//     imgUrl: "../images/join/engineer.png",
//     className : "engineer",
//     text: "计算机、软件、网络、通信或应用数学等相关专业||具有 2 年以上软件开发及设计经验|| 熟练掌握计算机程序设计的基础理论||熟练掌握数据结构、算法、操作系统、数据库、网络等计算机基础知识|| 熟悉常见的软件架构和设计模式||熟练使用 Java 和 JavaScript 语言等进行程序设计|| 熟悉各种常见的开发框架，并熟悉其具体原理||具备一定的中英文技术文档阅读能力"
// },
// {
//     title : "界面设计师",
//     imgUrl: "../images/join/designer.png",
//     className : "designer",
//     text:"热爱并执着于网页设计、软件界面设计和交互式设计等||富于创新、思维活跃||能独立担当设计工作，保持乐观精神|| 善于团队合作，有良好的设计表现力和沟通能力||能够使用 HTML 5 和 CSS 3 等进行页面设计||能够熟练使用各种常见的设计工具||1 年以上界面设计和网页设计的相关工作经验"
// },
