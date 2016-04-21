import React , {Component} from 'react'
import Utils from "./Utils"

const jobList = [
    {
        title : "高级开发工程师",
        imgUrl: "../images/join/engineer.png",
        className : "engineer",
        text: "计算机、软件、网络、通信或应用数学等相关专业||具有 2 年以上软件开发及设计经验|| 熟练掌握计算机程序设计的基础理论||熟练掌握数据结构、算法、操作系统、数据库、网络等计算机基础知识|| 熟悉常见的软件架构和设计模式||熟练使用 Java 和 JavaScript 语言等进行程序设计|| 熟悉各种常见的开发框架，并熟悉其具体原理||具备一定的中英文技术文档阅读能力"
    },
    {
        title : "界面设计师",
        imgUrl: "../images/join/designer.png",
        className : "designer",
        text:"热爱并执着于网页设计、软件界面设计和交互式设计等||富于创新、思维活跃||能独立担当设计工作，保持乐观精神|| 善于团队合作，有良好的设计表现力和沟通能力||能够使用 HTML 5 和 CSS 3 等进行页面设计||能够熟练使用各种常见的设计工具||1 年以上界面设计和网页设计的相关工作经验"
    },
    {
        title : "高级电商文案",
        imgUrl: "../images/join/producer.png",
        className : "producer",
        text:"负责公司网店的文案写作，店内活动策划，广告文案创作等||负责对产品进行直观、感性、富有吸引力的描述，切实提高商品的成交转换率||策划、撰写产品宣传文案和商品广告文案；各种促销及营销策划方案和实施方案||参与网店促销活动及品牌包装的创意、文案工作，协同网页美工完成广告海报的主题与软文制作||以公司产品为对象，了解客户需求，挖掘产品亮点与卖点，从事商品具体内容的策划和编辑，使商品描述实现多样化、内容化、品牌化||负责各个渠道活动策划和广告文案写作及推广"
    }
];

class Job extends Component{
    render() {
        let lines = this.props.job.text.split('||').map((string) => {
            return <p>{string}</p>
        }) ;
        return (
            <li className={"pure-g " + this.props.job.className}>
                <div className="pure-u-1 pure-u-md-1-2">
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
            return <Job job={item}/>
        });
        return (
            <ul>
                {jobs}
            </ul>
        );
    }
}

export default React.createClass({
    componentDidMount() {
        const root = document.getElementById('root');
        Utils.transitionOpacity(root);
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
               <img src="../images/join/banner.png" alt="高级开发工程师"/>
           </div>
            <Jobs jobList={jobList} />
        </div>
    );
  }
})
