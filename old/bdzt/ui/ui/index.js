$(function(){
	// banner 配置，[1, '#1']: 1 -> 图片类， '#1' -> 图片链接url
	var config = eval($('#banner_data').val());
	// 多增加一个banner，多增加一对参
	$('.theme-course li')
	.mouseenter(function(){
		$(this).find('div').css('top', 0);
	})
	.mouseleave(function(){
		$(this).find('div').css('top', 120);
	});

//浮动导航js
	$(document).ready(
		function(){
			$(".dh_in ul li").click(
				function(){
					$("html,body").animate(
						{
							"scrollTop":$(".mycon .box").eq($(this).index()).offset().top - 51
						},500
					);
				}
			);
			$(window).scroll(
				function(){
				var a=$(window).scrollTop();
				if(a>700&&a<8300){
					$("#fd").fadeIn();
				}else{
					$("#fd").fadeOut();	
				}
				}
			);	
		}
	);
		
});

