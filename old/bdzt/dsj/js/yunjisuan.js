/*banner图片切换封装*/
$(function(){

    var $a_banner_pic=$(".a_banner_pic");
    $a_prev=$a_banner_pic.find(".a_prev"),
        $a_next=$a_banner_pic.find(".a_next"),
        $aLi=$(".a_banner_pic").find("li"),
        $a_change_btn=$(".a_change_btn"),
        iLen=$aLi.length,
        timer=null,
        t="",
        arr=[],
        n=0;

    $aLi.each(function(index){
        t+='<a href="javascript:void(0);"><i></i></a>';
    });

    $a_change_btn.html(t);   //生成按钮

    var $a_change_a=$a_change_btn.find("a");

    $a_change_a.first().addClass("btn_active");

    $a_change_a.each(function(index){

        $(this).on("click",function(){
            n=index;
            bannerChange();
        })

    });

    doMove();
    function doMove(){
        $a_banner_pic.timer=setInterval(picChange,6000);
    }
    function picChange(){
        $a_next.trigger("click");
    }
    $a_next.on("click",function(){
        n++;
        bannerChange();
    });

    $a_prev.on("click",function(){
        n--;
        if(n<0) n=iLen-1;
        bannerChange();

    });
    function bannerChange(){
        clearInterval($a_banner_pic.timer);
        $aLi.eq(0).stop().animate({opacity:1},900).show();
        $aLi.eq(n%iLen).stop().animate({opacity:1},900).show();
        $aLi.eq(n%iLen).siblings().stop().animate({opacity:0},800,function(){
            $aLi.eq(n%iLen).siblings().hide();
        });
        $a_change_a.eq(n%iLen).addClass("btn_active").siblings().removeClass("btn_active");
        doMove();
    }
});

$(document).ready(function(){
    $(".banner_list").addClass('zoomIn');
    $(document).scroll(function(){
        if($(document).scrollTop()+$(window).height()/2>$(".contain").eq(0).offset().top){
            $(".range").eq(0).find('span').eq(0).animate({"width":"276px"},1000,function(){
                $(".range").eq(0).find('span').eq(1).show();
            })
            $(".range").eq(1).find('span').eq(0).animate({"width":"224px"},1000,function(){
                $(".range").eq(1).find('span').eq(1).show();
            })
            $(".con1_wrap img").addClass('fadeInLeft')
            $(".con1_wrap .fr").addClass('fadeInRight')
        }
        if($(document).scrollTop()+$(window).height()/2>$(".contain").eq(1).offset().top){
            $(".con2_wrap img").addClass('rollIn')
        }
        if($(document).scrollTop()+$(window).height()/2>$(".contain").eq(3).offset().top){
            $(".con4_right div").show();
            $(".con4_right div").eq(0).addClass('bounceInDown');
            $(".con4_right div").eq(1).addClass('bounceInUp');
            $(".con4_right div").eq(2).addClass('bounceInDown');
            $(".con4_right div").eq(3).addClass('bounceInUp');
        }
        if($(document).scrollTop()+$(window).height()/2>$(".contain").eq(4).offset().top){
            $(".con5_right img").eq(0).show();
            $(".con5_list").addClass('zoomIn')
            $(".con5_right img").eq(0).addClass('zoomIn');

        }
    });
    $(".con2_list1 li").mouseover(function(){
        $(this).addClass('hover pulse').siblings('li').removeClass('hover pulse');
    });
    $(".con3_list1 li").mouseover(function(){
        $(this).addClass('hover tada').siblings('li').removeClass('hover tada')
    });
    $(".mj_select0").mouseover(function(){
        $(this).addClass('hover')
        $(this).find(".hover-text1").hide();
        $(this).find(".hover-text2").show();
    });
    $(".mj_select0").mouseout(function(){
        $(this).removeClass('hover')
        $(this).find(".hover-text1").show();
        $(this).find(".hover-text2").hide();
    });
    $(".con7_list1 li").mouseover(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover')
    });
    $(".con8_list1 li").mouseover(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(this).find('span').addClass('swing')
        $(this).siblings('li').find('span').removeClass('swing');
    });
    $(".weixin").mouseover(function(){
        $(this).find('span').show();
    });
    $(".weixin").mouseout(function(){
        $(this).find('span').hide();
    });
    $(".con9_list1 li").mouseover(function(){
        $(this).addClass('flash').siblings('li').removeClass('flash')
    });
})

//师资团队
$(function(){

    var arr=[
                {
                    "num":3,
                    "name":"于老师",
                    "description":"十多年的信息化、互联网化建设、大数据<br />系统架构及分析经验，主导过建设银行云计算平台<br />产品研发和实施，大数据平台产品研发和实施。从世界<br />500强企业到私人企业,并兼具甲乙方的经验，对java、<br />Hadoop、Scala、Spark、机器学习等大数据技术具有深<br />厚的技术功底。行业经验包括电子商务、金融 、电信、汽车<br />等，能利用广泛的技术迅速将客户需求转化为可操作的项目计<br />划。拥有千万级到亿万级PV网站技术架构实现经验，开发过大<br />型的互联网B2B2C网站，如：建设银行的善融商城，长久的<br />汽配商城千品猫，移动互联网iOS、安卓APP 。企业<br />系统有CRM、ERP、财务、EHR等系统。"
                },
                 {
                    "num":4,
                    "name":"杨老师",
                    "description":"千锋云计算大数据讲师，多年的软件<br />开发经验，参与过庄络农贸通，中国农技推广中<br />心，96168三农服务网等多个农业项目的开发。有丰<br />富的授课经验，在北京各个知名的培训机构担任过讲师，讲<br />课由浅入深，通俗易懂，善于活跃课堂气氛，因材施教，<br />注重对学生能力的培养，得到学员的高度好评。"
                }


            ];

            var $aTeamSmallPic=$(".aTeamSmallPic"),
                $a_team_name=$(".a_team_name"),
                $a_team_cir1_span=$(".a_team_cir1").find("span"),
                $a_team_pic=$(".a_team_pic"),
                arrN=[],
                t="";

                $.each(arr,function(index){
                    t+='<a href="javascript:void(0);"><img src="http://www.mobiletrain.org/big_data/img/yunjisuan/t'+arr[index].num+'.png" height="118" width="118" alt="'+arr[index].name+'"></a>';
                });
                $aTeamSmallPic.html(t);    //生成小图片

            var $aTeamSmallPic_a=$aTeamSmallPic.find("a");
                $aTeamSmallPic_a.eq(0).addClass("aTeamActive");


                //初始化内容

                $a_team_name.html(arr[0].name);    //添加名字
                $a_team_pic.html('<img src="http://www.mobiletrain.org/big_data/img/yunjisuan/teacher'+arr[0].num+'.png" height="435" width="330" alt="'+arr[0].name+'">');     //添加乳品
                $a_team_cir1_span.eq(0).html(arr[0].description);  //添加简介
                if(arr[0].video){
                    $a_team_cir1_span.eq(1).html("<i>授课视频：</i>"+arr[0].video);
                }else{
                    $a_team_cir1_span.eq(1).html("");
                }       //添加授课视频
                arrN[0]=0


                $aTeamSmallPic_a.each(function(index){

                    $(this).click(function(){

                        $a_team_name.html(arr[index].name);    //添加名字
                        $a_team_pic.html('<img src="http://www.mobiletrain.org/big_data/img/yunjisuan/teacher'+arr[index].num+'.png" height="435" width="330" alt="'+arr[index].name+'">');     //添加乳品
                        $a_team_cir1_span.eq(0).html(arr[index].description);  //添加简介


                        if(arr[index].video){
                            $a_team_cir1_span.eq(1).html("<i>授课视频：</i>"+arr[index].video);
                        }else{
                            $a_team_cir1_span.eq(1).html("");
                        }       //添加授课视频

                        $(this).siblings().removeClass("aTeamActive").end().addClass("aTeamActive");   //鼠标点击状态
                        arrN[0]=index;
                    });
                });

});
