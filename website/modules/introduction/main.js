
var showMap = function() {
    // 百度地图API功能
    var map = new BMap.Map('bdmap');
    var poi = new BMap.Point(114.129208, 22.549973);
    map.centerAndZoom(poi, 16);

    // map.enableScrollWheelZoom(); //启用滚轮放大缩小
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("深圳"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '<img src="modules/common/img/logo-no.svg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
        '地址：深圳市罗湖区深南东路 2105 号中建大厦7层 <br/>电话：0755-26966586<br/>口号：终其而为， 欲达则至' +
        '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: "中昱达信息技术有限责任公司", //标题
        width: 290, //宽度
        height: 105, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        enableSendToPhone: true,
        searchTypes: [
            BMAPLIB_TAB_TO_HERE, //到这里去
            BMAPLIB_TAB_FROM_HERE, //从这里出发
            BMAPLIB_TAB_SEARCH //周边检索
        ]
    });

    var marker = new BMap.Marker(poi); //创建marker对象
    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    marker.addEventListener("click", function(e) {
        if (searchInfoWindow._isOpen) {
            searchInfoWindow.close();
        } else {
            searchInfoWindow.open(marker);
        }
    });

    map.addOverlay(marker); //在地图中添加marker
    searchInfoWindow.open(marker); //在marker上打开检索信息串口

    function PositionControl() {
        // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(19, 200);
    }
    PositionControl.prototype = new BMap.Control();

    PositionControl.prototype.initialize = function(map) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = 'modules/common/img/position.jpg';
        img.style.width = '24px';
        img.style.height = '24px';
        img.style.cursor = "pointer";
        div.appendChild(img);
        img.onclick = function(e) {
            if (searchInfoWindow._isOpen) {
                searchInfoWindow.close();
            } else {
                searchInfoWindow.open(marker);
            }
        }
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div);
        // 将DOM元素返回
        return div;
    }
    // 创建控件
    var myPositionControl = new PositionControl();
    // 添加到地图当中
    map.addControl(myPositionControl);

    // $("close").onclick = function(){
    //     searchInfoWindow.close();
    // }
    // $("open").onclick = function(){
    //     var enableSendToPhone = false;
    //     if ($("enableSendToPhone").checked) {
    //         enableSendToPhone = true;
    //     }
    //     searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    //         title  : "中建大厦",      //标题
    //         width  : 290,             //宽度
    //         height : 105,              //高度
    //         panel  : "panel",         //检索结果面板
    //         enableAutoPan : true,     //自动平移
    //         enableSendToPhone: enableSendToPhone, //是否启用发送到手机
    //         searchTypes   :[
    //             BMAPLIB_TAB_TO_HERE,   //到这里去
    //             BMAPLIB_TAB_FROM_HERE, //从这里出发
    //             BMAPLIB_TAB_SEARCH  //周边检索
    //         ]
    //     });
    //     if ($("enableAutoPan").checked) {
    //         searchInfoWindow.enableAutoPan();
    //     } else {
    //         searchInfoWindow.disableAutoPan();
    //     };
    //     searchInfoWindow.open(marker);
    // }

    // $("show").onclick = function(){
    //     searchInfoWindow.show();
    // }

    // $("hide").onclick = function(){
    //     searchInfoWindow.hide();
    // }

}

$(function() {
	$("#nav").addClass('show');
	$("#nav #introduction-li").addClass('active');

    setTimeout(showMap, 1000);
})
