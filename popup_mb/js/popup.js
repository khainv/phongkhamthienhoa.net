var link_tuvan = 'https://chat.thienhoa.org/lr/chatpre.aspx?id=kuz57484630&lng=en';
var domain = window.location.hostname;
var color_bg_button_dy = '#12a1b0';
var color_bg_button_tc = '#ff0000';
var arr_pk = [
    'phukhoathienhoa.com',
    'phukhoa75.com'
];
var arr_bxh = [
    'chuabenhxahoi.info',
    'benhxahoihanoi.com',
    'benhxahoihanoi.net'
];
if (arr_pk.indexOf(domain) >= 0) {
    color_bg_button_dy = '#7260ac';
}
if (arr_bxh.indexOf(domain) >= 0) {
    color_bg_button_dy = '#008266';
}

function popup() {
    var str = '<style>' +
        '.tuvandienthoai a p {float: left;margin: 0px;padding: 5px 23px;border-radius: 5px;text-align: center;}' +
        '.tuvandienthoai a{color:#fff;   text-decoration: none;  font-size: 14px;cursor: pointer;}' +
        '.popup_wrapper {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 2147483646;visibility: hidden;opacity: 0; -webkit-transition: all 0.5s;-o-transition: all 0.5s;transition: all 0.5s;display: none;}' +
        '.popup_wrapper.active {opacity: 1 !important;visibility: visible;display: block;}' +
        '.popup_wrapper.active .effect-overlay {position: absolute;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.7);z-index: 2147483647;}' +
        '</style>';
    var str2 = '<div id="popup" style="padding-top: 12px;width: 300px;display: none;position: fixed;z-index: 2147483648;border: 2px solid ' + color_bg_button_dy + ';border-radius: 6px;padding-bottom: 7px;background: rgb(255, 255, 255);top:56%;left:50%;margin-left:-148px;margin-top:-100px;"><div>' +
        '</div>' +
        '<div style="  clear: both;"><p style="   padding-top: 0px;  text-align: center;  font-weight: 600;  margin-bottom: 11px;  font-size: 14px;">Bác sỹ đang yêu cầu được chát với bạn.</p></div>' +
        '<div class="tuvandienthoai" style="  clear: both;  padding-top: 8px;">' +
        '<a class="popup_close"><p style="  background: ' + color_bg_button_tc + ';  background-image: linear-gradient( ' + color_bg_button_tc + ', ' + color_bg_button_tc + ');margin-left: 40px;"> Từ chối</p></a>' +
        '<a target="_self" href="javascript:void(0)"  onclick="openZoosUrl()" id="popup_yes"><p style="  background: ' + color_bg_button_dy + ';  background-image: linear-gradient( ' + color_bg_button_dy + ', ' + color_bg_button_dy + ');margin-right: 40px;float:right;"> Đồng ý</p></a>' +
        '</div>' +
        '</div>';
    var str3 = '<div class="popup_wrapper"><div class="effect-overlay"></div> </div>';
    return str + str2 + str3;
}

document.body.innerHTML += popup();

setTimeout(function () {
    document.getElementById("popup").style.display = 'block';
    document.querySelector(".popup_wrapper").classList.add('active');
}, 10000);

document.querySelector(".popup_close").onclick = function () {
    document.getElementById("popup").style.display = 'none';
    document.querySelector(".popup_wrapper").classList.remove('active');
    setTimeout(function () {
        document.querySelector(".popup_wrapper").classList.add('active');
    }, 60000);
};

document.getElementById("popup_yes").click(function () {
    document.getElementById("popup").style.display = 'none';
    document.querySelector(".popup_wrapper").classList.remove('active');
    setTimeout(function () {
        document.querySelector(".popup_wrapper").classList.add('active');
    }, 60000);
});
