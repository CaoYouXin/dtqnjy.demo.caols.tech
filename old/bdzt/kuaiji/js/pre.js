
//QueryString截取
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//alert(getQueryString("city"));	


//获取特殊文字类型keyword
var keyword=getQueryString("keyword");

//根据keyword变换文字
var T_title;
var T_content;
var T_ts;
switch(keyword){
	case "cw":
		T_title="财务会计培训";
		T_content="名师授课，晋升财会职场!";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "cr":
		T_title="成人会计培训";
		T_content="名师授课，晋升财会职场!";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "dsh":
		T_title="会计电算化培训";
		T_content="真账实操，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "gl":
		T_title="管理会计培训";
		T_content="真账实操，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "hs":
		T_title="核算会计培训";
		T_content="真账实操，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "kjs":
		T_title="会计师考试培训";
		T_content="一次过考试，毕业拿双证！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "kjz":
		T_title="考取会计证";
		T_content="毕业拿双证, 就业有保障！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "rm":
		T_title="零基础会计班";
		T_content="会计入门=实操+取证+就业！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "sw":
		T_title="实务会计培训";
		T_content="手把手真账实操，推荐就业！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "sc":
		T_title="会计短期速成班";
		T_content="考前冲刺，考点精讲，一次通过！";
		T_ts="23省217校区, 随到随学, 真账实操, 推荐就业! ";
		break;
	case "zg":
		T_title="主管会计培训";
		T_content="名师授课，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "zl":
		T_title="助理会计培训";
		T_content="名师授课，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "cn":
		T_title="出纳税务培训";
		T_content="名师授课，晋升财会职场！";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "gq":
		T_title="会计岗前培训";
		T_content="毕业拿双证, 就业有保障！ ";
		T_ts="网上咨询预约,立减50元,免费试听!";
		break;
	case "kc":
		T_title="会计培训课程";
		T_content="3种班次365天循环滚动授课!";
		T_ts="网上咨询预约,立减50元,免费试听! ";
		break;
	case "ks":
		T_title="会计考试培训";
		T_content="网上预约,立减50元,免费试听!";
		T_ts="23省217校区, 随到随学, 真账实操, 推荐就业! ";
		break;		
	default:
		T_title="学会计，到仁和";
		T_content="网上预约,立减50元,免费试听!"
		T_ts="23省217校区,随到随学,真账实操,推荐就业!";
}
//加载全部动态内容
$(document).ready(function(){
	$("#T_title").html(T_title);
	$("#T_content").html(T_content);
	$("#T_ts").html(T_ts);
});