import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";

const Footer = () => {
    let popup = '';
    if (window.innerWidth >= 576) {
        popup = '/popup_pc/js/popup.js'
    } else {
        popup = '/popup_mb/js/popup.js'
    }

    return (
        <>
            <footer>
                <div className="footer--top">
                    <div className="wrapper">
                        <div className="col">
                            <a href="tel:1900252573">
                                <img src="assets/images/icon_phone.png" alt=""/>
                                <p>
                                    <span>Hotline 24/7</span>
                                    <b>1900 25.25.73</b>
                                </p>
                            </a>
                        </div>
                        <div className="col">
                            <a href={process.env.REACT_APP_LIVECHAT}>
                                <img src="assets/images/icon_chat.png" alt=""/>
                                <p>
                                    <span>Bác sĩ tư vấn trực tuyến</span>
                                    <b>TƯ VẤN</b>
                                </p>
                            </a>
                        </div>
                        <div className="col">
                            <a href={process.env.REACT_APP_LIVECHAT}>
                                <img src="assets/images/icon_lich.png" alt=""/>
                                <p>
                                    <span>Hẹn khám online</span>
                                    <b>ĐĂNG KÝ</b>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer--center">
                    <div className="wrapper">
                        <div className="col">
                            <div className="title--footer">
                                <img src="assets/images/logo_footer.png" alt="" className="img-fluid"/>
                            </div>
                            <p className="title--slogan">"Thiện Hòa - Sự lựa chọn hoàn hảo cho sức khỏe của
                                bạn"</p>
                            <p>Giấy phép hoạt động cơ sở khám chữa bệnh số 06/SYT - GPHĐ/CL4 do Sở Y tế cấp
                                phép.</p>
                            <p>Email: dakhoathienhoa@gmail.com</p>
                            <p>Địa chỉ: <span
                                className="color--yellow">73 Trần Duy Hưng, Cầu Giấy - HN</span></p>
                            <p>Bác sĩ tư vấn: <span className="color--yellow">1900 25.25.73</span></p>

                        </div>
                        <div className="col">
                            <p className="title--footer">liên kết mạng xã hội</p>
                            <a href="https://www.facebook.com/phongkhamdakhoaTH" target="_blank" rel="noopener noreferrer"><img src="assets/images/fbt.png" alt=""/></a>
                            <a href="https://zalo.me/2058505886257207205" target="_blank" rel="noopener noreferrer"><img src="assets/images/zalot.png" alt=""/></a>
                            <a href="https://www.m.me/phongkhamdakhoaTH" target="_blank" rel="noopener noreferrer"><img src="assets/images/messengert.png" alt=""/></a>
                        </div>
                        <div className="col">
                            <a href="https://www.google.com/maps/dir//Ph%C3%B2ng+Kh%C3%A1m+%C4%90a+Khoa+Thi%C3%AAn+H%C3%B2a/@21.0072811,105.7314523,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135aca09f0b736d:0x740f10f026906546!2m2!1d105.8010152!2d21.0115175"
                               target='_blank' rel="noopener noreferrer"><img
                                src="assets/images/map.png" alt="" className="img-fluid"/></a>
                        </div>
                    </div>
                </div>
                <div className="footer--bottom">
                    <span>Bản quyền thuộc về Phòng Khám Đa Khoa Thiện Hòa 2020</span>
                </div>
            </footer>
            /*<Helmet><script src={popup}></script></Helmet>*/
        </>
    )
}

export default Footer
