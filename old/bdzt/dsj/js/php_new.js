/*所有底部html*/
$(function() {
    $(".nav_right a,.c_footer_nav a,.sz_nav li a").each(function(){
        if($(this).html()=='技术论坛'){
           $(this).html('学员论坛');
       };
    })
    $("p.hc_floatleft").html("中国IT职业教育领先品牌-千锋教育");
    $("strong.floatLeft").html("中国IT职业教育领先品牌-千锋教育");
    $(".nav_main .nav_fixed").append('<div class="class170109">'+
                '<div class="basebase">'+
                 '<div class="base clear">'+
                     '<a href="http://www.mobiletrain.org/page/android.html" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/ad_ico.png" width="63" height="73" />'+
                          '<u>Android</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/page/html5.html" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/h5_ico.png" width="63" height="73" />'+
                          '<u>HTML5</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/page/ui.html" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/ui_ico.png" width="63" height="73" />'+
                          '<u>UI</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/page/php/" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/php_ico.png" width="63" height="73" />'+
                          '<u>PHP</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/java/" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/java_ico.png" width="63" height="73" />'+
                          '<u>Java</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/big_data/" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/big_ico.png" width="63" height="73" />'+
                          '<u>大数据开发</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/vr/" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/vr_ico.png" width="63" height="73" />'+
                          '<u>VR/AR</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/page/python/" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/python_ico.png" width="63" height="73" />'+
                          '<u>Python</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/page/ios.html" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/ios_ico.png" width="63" height="73" />'+
                          '<u>iOS</u>'+
                     '</a>'+
                     '<a href="http://www.mobiletrain.org/shixun/index.html" target="_blank">'+
                          '<img src="http://www.mobiletrain.org/images/index161222/sx_ico.png" width="63" height="73" />'+
                          '<u>实训课程</u>'+
                     '</a>'+
                 '</div>'+
                '</div>'+
            '</div>')
$(".sy_top i.call").prepend('<img class="me" src="http://www.mobiletrain.org/images/index/me.png" width="268" height="23" style="position:absolute;left:-153px;top:46px;z-index:9999999"/>');
    $(".bottom_part2").html("<div class='c_bot'><div class='c_base clear'><div class='c_bot_lt'><div class='c_bot_lt_hd'><a href='javascript:void(0);' class='active'>北京</a><a href='javascript:void(0);'>深圳</a><a href='javascript:void(0);'>上海</a><a href='javascript:void(0);'>郑州</a><a href='javascript:void(0);'>广州</a><a href='javascript:void(0);'>大连</a><a href='javascript:void(0);'>武汉</a><a href='javascript:void(0);'>成都</a><a href='javascript:void(0);'>西安</a><a href='javascript:void(0);'>杭州</a><a href='javascript:void(0);'>青岛</a></div><ul><li><strong>北京天丰利校区（总部）：北京市海淀区宝盛北里西区28号天丰利商城4层</strong><br>北京沙河校区：北京市昌平区沙阳路18号北京科技职业技术学院广场服务楼2层、南区服务楼2层<br>咨询电话：<span>400-654-7778 010-82790226-801</span><br>面授课程：Android培训、HTML5培训、UI交互设计培训、PHP培训、JavaEE培训、大数据开发培<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;训、VR/AR混合现实培训、Python培训、iOS培训、好程序员</li><li>深圳西部硅谷校区：深圳市宝安区宝安大道5010号深圳西部硅谷A区B座605-619<br>深圳大学城校区：深圳市南山区留仙大道1201号大学城创客小镇16栋2楼、3楼<br>咨询电话：<span>0755-33582485-801（硅谷校区） 0755-86660670-801（大学城校区）</span><br>面授课程：Android培训、HTML5培训、UI交互设计培训、PHP培训、JavaEE培训、大数据开发培<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;训、VR/AR混合现实培训</li><li>上海学院地址：上海市宝山区同济支路199号智慧七立方3号楼2-4层<br>咨询电话：<span>400-627-7899 021-56166283/56166279</span><br>面授课程：PHP培训、Android课程培训、HTML5课程培训、UI交互设计培训、JavaEE培训、iOS课<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程培训、好程序员</li><li>郑州学院地址：郑州市金水区纬五路21号河南教育学院综合楼（经纬中学楼）6/7/8层<br>咨询电话：<span>0371-55191750 400-654-7778</span><br>面授课程：Android课程培训、HTML5课程培训、UI交互设计培训、JavaEE培训、iOS课程培训</li><li>广州学院地址：广州市天河区元岗路310号智汇park创意园E座5层<br>咨询电话：<span>020-22119207 400-654-7778</span><br>面授课程：Android课程培训、HTML5课程培训、iOS课程培训、JavaEE培训</li><li>大连学院地址：辽宁省大连市甘井子区软件园路2号东软信息学院B8座2层<br>咨询电话：<span>0411-39026086 400-654-7778</span><br>面授课程：Android课程培训、HTML5课程培训、JavaEE培训、iOS课程培训</li><li>武汉学院地址：武汉市江夏区藏龙岛杨桥湖大道15号拓创大厦15楼<br>咨询电话：<span>027-81772047</span><br>面授课程：Android课程培训、HTML5课程培训、JavaEE培训、iOS课程培训</li><li>成都旅游学院校区：成都市一环路西二段17号四川旅游学院青羊校区内<br>成都华立校区：成都一环路西二段17号华立大厦3楼<br>咨询电话：<span>028-83178771 028-61967740</span><br>面授课程：Android课程培训、HTML5课程培训、UI交互设计培训、JavaEE培训、iOS课程培训</li><li>校区地址：西安市雁塔区高新六路52号立人科技C座西区4楼<br>咨询电话：<span>029-85260160 029-85261030 029-85260960</span><br>面授课程：Android课程培训、HTML5课程培训、JavaEE培训</li><li>杭州学院地址：浙江省杭州市江干区九堡旺田书画城A座4层<br>咨询电话：<span>0571-86893632 010-82790226-801</span><br>面授课程：Android课程培训、HTML5课程培训、、JavaEE培训、iOS课程培训</li><li>青岛校区地址：青岛市市南区金坛路17号青岛职业技术学院南校区实训楼A4层<br>咨询电话：<span>0532-80910752/3 010-82790226-801</span><br>面授课程：Android课程培训、HTML5课程培训、UI交互设计培训、iOS课程培训</li></ul></div><div class='c_bot_rg'><ul class='clear'><li style='padding-right:15px'><img src='http://www.mobiletrain.org/images/c_bot_fxb.png' alt><p>了解千锋动态<br>关注千锋教育服务号</p></li><li><img src='http://www.mobiletrain.org/images/c_bot_wx.png' alt><p>扫码关注千锋互联<br>身边的移动开发导师</p></li></ul></div></div></div>");
    $("body").prepend("<style>.base_fixed{background:rgba(0,0,0,0);width:65px;font-family:微软雅黑;position:absolute;z-index:100000;left:0;}.base_fixed a{display:block;width:65px;height:28px;border:1px solid #e3e3e3;border-top:none;text-align:center;padding-top:40px;font-size:12px;line-height:20px;background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px 15px;color:#000000;text-decoration:none;}.base_fixed .f_a1{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px 15px;color:#fff;border-color:#f1801b;border-bottom:1px solid #e3e3e3;}.base_fixed .f_a2{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -49px;}.base_fixed .f_a3{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -108px;}.base_fixed .f_a4{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -168px;}.base_fixed .f_a7{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -368px;}.base_fixed .f_a7:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -47px -368px;color:#fff;border-color:#f1801b;}.base_fixed .f_a5{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -228px;}.base_fixed .f_a6{background:#fff url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat 20px -288px;position:relative;-webkit-transition:0.3s;}.base_fixed .f_a2:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -44px -49px;color:#fff;border-color:#f1801b;}.base_fixed .f_a3:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -44px -108px;color:#fff;border-color:#f1801b;}.base_fixed .f_a4:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -44px -168px;color:#fff;border-color:#f1801b;}.base_fixed .f_a5:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -44px -228px;color:#fff;border-color:#f1801b;}.base_fixed .f_a6:hover{background:#f1801b url(http://www.mobiletrain.org/images/b_f_ico.png) no-repeat -44px -288px;color:#fff;border-color:#f1801b;}.base_fixed .f_a6:hover i{width:150px;}.base_fixed i{display:inline-block;background:#f1801b;position:absolute;font-size:14px;font-weight:bold;width:150px;text-align:center;height:69px;line-height:69px;left:70px;top:0;color:#fff;font-style:normal;overflow:hidden;width:0;-webkit-transition:0.3s;width:0;}</style><div class='base_fixed'><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a1'>报名咨询</a><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a2'>0元入学</a><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a3'>助学贷款</a><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a4'>就业保障</a><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a5'>视频下载</a><a href='http://www.mobiletrain.org/open/'target='_blank'class='f_a7'>在线公开课</a><a href='http://tb.53kf.com/code/client/10132404/3'target='_blank'class='f_a6'>咨询热线<i>400-654-7778</i></a><img src='http://www.mobiletrain.org/images/qf_fix02.png'style='display: block;width:67px;border-top:1px solid #fff;cursor:pointer;display:none'class='qf_fix02'></div>");
    $(".nav_main .xq i").html('北京（总部）');
    $(".nav_right span.nav p").html('<a href="http://www.mobiletrain.org/page/android.html" target="_blank" class="nav">Android</a>'+
                         '<a href="http://www.mobiletrain.org/page/html5.html" target="_blank" class="nav">HTML5</a>'+
                         '<a href="http://www.mobiletrain.org/page/ui.html" target="_blank" class="nav">UI</a>'+
                         '<a href="http://www.mobiletrain.org/page/php/" target="_blank" class="nav">PHP</a>'+
                         '<a href="http://www.mobiletrain.org/java/" target="_blank" class="nav">JavaEE</a>'+
                         '<a href="http://www.mobiletrain.org/big_data/" target="_blank" class="nav cloud">大数据开发</a>'+
                         '<a href="http://www.mobiletrain.org/vr/" target="_blank" class="nav">VR/AR</a>'+
                         '<a href="http://www.mobiletrain.org/page/ios.html" target="_blank" class="nav">iOS</a>'+
                         '<a href="http://www.mobiletrain.org/shixun/index.html" target="_blank" class="nav">实训课程</a>'+
                         '<a href="http://www.mobiletrain.org/video/" target="_blank" class="nav">精彩视频</a></p>');

})

/**
 * 保留当前url的参数，追加在页面内所有href中
 */
var s = location.search.substring(1);
var as = document.getElementsByTagName('a');
for (var i = 0; i < as.length; i++) {
    as[i].href = as[i].href + (as[i].href.indexOf('?') == -1 ? '?' : '&') + s;
}
//底部切换
$(function() {
    $qf_h = $(window).height()
    var hh=(window.innerHeight-544)/2;
    console.log(hh);
    $(".base_fixed").css({"top":hh});
    $(document).scroll(function() {
        $scrolltop = $(window).scrollTop();
        $(".base_fixed").stop().animate({
            top: $scrolltop + hh
        });
        if ($scrolltop > 10) {
            $(".qf_fix02").fadeIn();
        } else {
            $(".qf_fix02").fadeOut();
        }
        $(".div").stop().animate({
            "top": $scrolltop + 300
        });
    })
    $(".qf_fix02").click(function() {
        $("body,html").animate({
            scrollTop: 0
        })
    })
})
$(function() {
    var $botBtn, $botLi;
    $botBtn = $(".c_bot_lt_hd").find("a");
    $botLi = $(".c_bot_lt ul").find("li");
    $botBtn.first().addClass("active");
    $botLi.first().show();

    $botBtn.each(function(index) {
        $(this).mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $botLi.eq(index).show().siblings().hide();

        });
    });


});
$(document).ready(function(){
  $("table").each(function(){
      if($("tr:nth-child(1) td",this).length==8){
                $("tr td:nth-child(5)",this).each(function(){
                    if($(this).html().length>=6){
                        $(this).html($(this).html().substr(0,2)+"**"+$(this).html().substr(-3,3))
                    }
                })
                $("tr td:nth-child(1)",this).each(function(){
                    if($(this).html().length==2){
                        $(this).html($(this).html().substr(0,1)+"*")
                    }
                    if($(this).html().length>2){
                        $(this).html($(this).html().substr(0,1)+"*"+$(this).html().substr(-1,1))
                    }
                })

     }
  })
});
$(function(){
    $(".nav_right .nav").mouseout(function(){
       $(".nav_right .nav").eq(0).addClass('nav_on').siblings().removeClass('nav_on');
    })
    $(".nav_right span,.class170109").hover(function(){
       $(".class170109").addClass('on');
       $(".nav_right span").addClass('on');
       $(".nav_right .nav").eq(0).removeClass('nav_on');
    },function(){
       $(".class170109").removeClass('on');
       $(".nav_right span").removeClass('on');
       $(".nav_right .nav").eq(0).addClass('nav_on');
    })
    $(".nav_right .nav").each(function(nav_index){
        $(this).mouseover(function(){
            $(this).addClass('nav_on').siblings().removeClass('nav_on');
        })
    })
})