import React, {useState} from 'react'
import Link from '../components/Link'
import Dimensions from '../components/Dimensions'
import {Helmet} from "react-helmet/es/Helmet";
const Header = () => {
    const [statusNavbar, setStatusNavbar] = useState(window.innerWidth > 768 ? true : false)
    const {width} = Dimensions()

    const popupk = function () {
        var popup1='',popup2='';
        if (window.innerWidth >= 576) {
            popup1 = 'https://namkhoathienhoa.com/popup/js/popup.js';
            popup2 = 'https://namkhoathienhoa.com/popup/js/funs.js';
        } else {
            popup1 = 'https://namkhoathienhoa.com/popup/js/m_popup.js';
        }
        const script = document.createElement("script");
        script.src = popup1;
        script.async = true;
        document.body.appendChild(script);
        const script2 = document.createElement("script");
        script2.src = popup2;
        script2.async = true;
        document.body.appendChild(script2);
    }
    return (
        <>
            <header>
                <div>
                {popupk()}
                </div>
                <div className="header__top">
                    <div className="wrapper">
                        <div className="social">
                            <div className="social--facebook">
                                <a href="https://www.facebook.com/phongkhamdakhoaTH" target="_blank" rel="noopener noreferrer"><img
                                    src="assets/images/facebook.png" alt=""/></a>
                            </div>
                            <div className="social--zalo">
                                <a href="https://zalo.me/2058505886257207205" target="_blank" rel="noopener noreferrer"><img
                                    src="assets/images/zalo.png" alt=""/></a>
                            </div>
                            <div className="social--messenger">
                                <a href="https://www.facebook.com/phongkhamdakhoaTH" target="_blank" rel="noopener noreferrer"><img
                                    src="assets/images/messenger.png" alt=""/></a>
                            </div>
                            <div className="social--search">
                                <a href="#search"><img src="assets/images/search.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__center">
                    <div className="wrapper">
                        <div className="menu">
                            <button onClick={() => setStatusNavbar(!statusNavbar)}><img src="assets/images/btn_menu.png"alt=""/></button>
                        </div>
                        <div className="logo">
                            <Link to='/'>
                                <picture>
                                    <source
                                        srcSet="assets/images/logo_footer.png"
                                        media="(max-width:767px)"/>
                                    <img src="assets/images/logo.png" alt="" className='img-fluid'/>
                                </picture>
                            </Link>
                        </div>
                        <div className="time">
                            <p><i>Thời gian làm việc từ:</i></p>
                            <p><i><b className="color--red">8h - 20h</b> từ <b className="color--red">Thứ 2 đến Chủ
                                Nhật</b></i></p>
                        </div>
                        <div className="hotline">
                            <a href="tel:02466739999">
                                <picture>
                                    <source
                                        srcSet="assets/images/btn_phone.png"
                                        media="(max-width:767px)"/>
                                    <img src="assets/images/hotline.png" alt="" className='img-fluid'/>
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="wrapper">
                        {(statusNavbar || width > 768) &&
                        <nav className="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Trang chủ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gioi-thieu-phong-kham-tran-duy-hung">Giới
                                        thiệu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/benh-nam-khoa">Nam Khoa</Link>
                                    <ul>
                                        <li><Link to="/benh-ly-tinh-hoan">Bệnh lý tinh hoàn</Link></li>
                                        <li><Link to="/viem-tinh-hoan">Viêm tinh hoàn</Link></li>
                                        <li><Link to="/dau-tinh-hoan">Đau tinh hoàn</Link></li>
                                        <li><Link to="/kham-nam-khoa">Khám nam khoa</Link></li>
                                        <li><Link to="/mun-duong-vat">Mụn dương vật</Link></li>
                                        <li><Link to="/roi-loan-cuong-duong">Rối loạn cương dương</Link></li>
                                        <li><Link to="/liet-duong">Liệt dương</Link></li>
                                        <li><Link to="/xuat-tinh-ra-mau">Xuất tinh ra máu</Link></li>
                                        <li><Link to="/xuat-tinh-som">Xuất tinh sớm</Link></li>
                                        <li><Link to="/yeu-sinh-ly">Yếu sinh lý</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/benh-phu-khoa">Phụ Khoa</Link>
                                    <ul>
                                        <li><Link to="/benh-co-tu-cung">Bệnh cổ tử cung</Link></li>
                                        <li><Link to="/polyp-co-tu-cung">Polyp cổ tử cung</Link></li>
                                        <li><Link to="/viem-co-tu-cung">Viêm cổ tử cung</Link></li>
                                        <li><Link to="/viem-lo-tuyen-co-tu-cung">Viêm lộ tuyến cổ tử cung</Link></li>
                                        <li><Link to="/kham-phu-khoa">Khám phụ khoa</Link></li>
                                        <li><Link to="/khi-hu-bat-thuong">Khí hư bất thường</Link></li>
                                        <li><Link to="/khi-hu-ra-nhieu">Khí hư ra nhiều</Link></li>
                                        <li><Link to="/kinh-nguyet-khong-deu">Kinh nguyệt không đều</Link></li>
                                        <li><Link to="/ngua-am-dao">Ngứa âm đạo</Link></li>
                                        <li><Link to="/viem-am-dao">Viêm âm đạo</Link></li>
                                        <li><Link to="/viem-buong-trung">Viêm buồng trứng</Link></li>
                                        <li><Link to="/viem-nhiem-phu-khoa">Viêm nhiễm phụ khoa</Link></li>
                                        <li><Link to="/viem-vung-chau">Viêm vùng chậu</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/benh-xa-hoi">Bệnh xã hội</Link>
                                    <ul>
                                        <li><Link to="/benh-giang-mai">Bệnh giang mai</Link></li>
                                        <li><Link to="/benh-ha-cam">Bệnh hạ cam</Link></li>
                                        <li><Link to="/benh-lau">Bệnh lậu</Link></li>
                                        <li><Link to="/benh-sui-mao-ga">Bệnh sùi mào gà</Link></li>
                                        <li><Link to="/mun-coc-sinh-duc">Mụn cóc sinh dục</Link></li>
                                        <li><Link to="/mun-rop-sinh-duc">Mụn rộp sinh dục</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ke-hoach-hoa-gia-dinh">Kế hoạch hóa</Link>
                                    <ul>
                                        <li><Link to="/cam-nang-suc-khoe">Cẩm nang sức khỏe</Link></li>
                                        <li><Link to="/cham-kinh">Chậm kinh</Link></li>
                                        <li><Link to="/nao-hut-thai-an-toan">Nạo hút thai an toàn</Link></li>
                                        <li><Link to="/pha-thai-an-toan">Phá thai an toàn</Link></li>
                                        <li><Link to="/pha-thai-khong-dau">Phá thai không đau</Link></li>
                                        <li><Link to="/phuong-phap-pha-thai">Phương pháp phá thai</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/benh-da-lieu">Bệnh da liễu</Link>
                                    <ul>
                                        <li><Link to="/a-sung">Á Sừng</Link></li>
                                        <li><Link to="/ban-xuat-huyet">Ban xuất huyết</Link></li>
                                        <li><Link to="/benh-bach-bien">Bệnh bạch biến</Link></li>
                                        <li><Link to="/benh-cham">Bệnh Chàm</Link></li>
                                        <li><Link to="/benh-cuoc">Bệnh cước</Link></li>
                                        <li><Link to="/benh-ghe">Bệnh Ghẻ</Link></li>
                                        <li><Link to="/benh-ngua">Bệnh ngứa</Link></li>
                                        <li><Link to="/benh-thuy-dau">Bệnh thủy đậu</Link></li>
                                        <li><Link to="/benh-zona">Bệnh Zona</Link></li>
                                        <li><Link to="/di-ung-da">Dị ứng da</Link></li>
                                        <li><Link to="/hac-lao">Hắc lào</Link></li>
                                        <li><Link to="/lang-ben">Lang Ben</Link></li>
                                        <li><Link to="/me-day">Mề Đay</Link></li>
                                        <li><Link to="/mun-coc">Mụn cóc</Link></li>
                                        <li><Link to="/mun-com">Mụn cơm</Link></li>
                                        <li><Link to="/mun-trung-ca">Mụn trứng cá</Link></li>
                                        <li><Link to="/nam-da">Nấm da</Link></li>
                                        <li><Link to="/nam-mong">Nấm móng</Link></li>
                                        <li><Link to="/rung-toc-tung-vung">Rụng tóc từng vùng</Link></li>
                                        <li><Link to="/to-dia">Tổ Đỉa</Link></li>
                                        <li><Link to="/vay-ca">Vảy cá</Link></li>
                                        <li><Link to="/benh-vay-nen">Vảy Nến</Link></li>
                                        <li><Link to="/viem-da">Viêm da</Link></li>
                                        <li><Link to="/viem-nang-long">Viêm nang lông</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <button
                                        onClick={() => window.location.href = process.env.REACT_APP_LIVECHAT}>Đăng
                                        ký khám
                                    </button>
                                </li>
                            </ul>
                            <div className="btn--close">
                                <button onClick={() => setStatusNavbar(!statusNavbar)}>&times;</button>
                            </div>
                        </nav>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
