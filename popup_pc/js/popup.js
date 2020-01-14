var domain = window.location.origin;
var img_src = domain + '/popup_pc/image/bs-nk.png';

var str_css = '<link rel="stylesheet" href="' + domain + '/popup_pc/css/popup.css">';
var str = '<div class="fixed-middle popup-middle d-none" id="popup"><div class="media bs-pk">' +
    '<a class="media-left col-left" href="#"><img class="media-object" src="' + img_src + '" alt="Image"><span class="name">Bác sĩ: Vũ Hồng Lân</span></a>' +
    '<div class="media-body col-right"><ul class="list-unstyled"><li>Hơn 35 năm kinh nghiệm</li><li><p>Đại tá - Bác sĩ- CK II ngoại chung</p><p>Nguyên trưởng khoa ngoại chấn thương Bệnh viện quân y 354</p></li><li>Bác sĩ' +
    ' đang yêu cầu được tư vấn cho bạn</li></ul>' +
    '<div class="btn-action"><a href="javascript:void(0)" class="btn-close">Từ Chối</a><a href="javascript:void(0)" onclick="openZoosUrl()" class="btn-open">Tư vấn</a></div></div></div></div>';

document.body.innerHTML += str_css + str;

setTimeout(function () {
    ['active', 'd-none'].map(function (item) {
        document.getElementById("popup").classList.toggle(item);
    })
}, 5000);

document.querySelector(".btn-close").onclick = function () {
    document.querySelector("#popup").classList.toggle("active");
};
