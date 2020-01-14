var domain = window.location.origin;

var str_css = '<link rel="stylesheet" href="' + domain + '/popup_mb/css/popup.css">';
var str = '<div id="toopl" class="shadow"><div class="flagBox_c"><div class="close_swt close_popup"> <i' +
    ' style="float:right;width:23px;height:23px;margin-left:12px;"><img src="' + domain + '/popup_mb/image/aclose.png" alt="" style="float:left"></i><span style="color:#fff;font:14px/22px' +
    ' Arial;">close</span> </div><div class="center_n" id="center_n"><img src="' + domain + '/popup_mb/image/acenter_wx1.png"><p class="txt_quest">Bác sỹ đang yêu cầu được chat với' +
    ' bạn</p></div><div class="center_b"><div class="text-center"><a' +
    ' class="btn btn-danger mr-3" href="javascript:void(0)" onclick="openZoosUrl();$(\'#toopl\').fadeOut();" target="_self">Đồng ý</a><a class="btn btn-info close_popup">Từ' +
    ' chối</a></div></div></div><div' +
    ' id="footTool"' +
    ' class="float_container"><div class="title1a"><a href="tel:0387252521">Điện thoại tư vấn：0387.25.25.21</a></div></div></div>';
$(document).ready(function () {
    $('body').append(str_css + str);

    setTimeout(function () {
        $("#toopl").show().fadeIn();
    }, 5000);

    $(".close_popup").click(function () {
        $("#toopl").delay("slow").fadeOut();
    });
});
