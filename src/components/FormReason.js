import Contact from "./Contact";
import React from 'react'

const FormReason = () => {
    return (
        <div className="form-reason">
            <div className="box__reason">
                <p className='color--red font-weight-bold'>Lý do bạn nên chọn Phòng khám đa khoa Thiện
                    Hòa</p>
                <div className="reason">
                    <div className="reason__item">
                        <div className="reason__item__child">
                            <img src="assets/images/icon_capphep.png" alt=""/>
                            <p>Phòng khám được Sở Y tế cấp phép hoạt động</p>
                        </div>
                        <div className="reason__item__child">
                            <img src="assets/images/icon_nhanvien.png" alt=""/>
                            <p>Đội ngũ nhân viên chu đáo, tận tình hướng dẫn bệnh nhân</p>
                        </div>
                    </div>
                    <div className="reason__item">
                        <div className="reason__item__child">
                            <img src="assets/images/icon_csvc.png" alt=""/>
                            <p>Cơ sở vật chất tiện nghi, thiết bị hiện đại</p>
                        </div>
                        <div className="reason__item__child">
                            <img src="assets/images/icon_chiphi.png" alt=""/>
                            <p>Chi phí khám và điều trị được niêm yết theo quy định</p>
                        </div>
                    </div>
                    <div className="reason__item">
                        <div className="reason__item__child">
                            <img src="assets/images/icon_doingu.png" alt=""/>
                            <p>Đội ngũ y bác sĩ giàu kinh nghiệm, chuyên môn cao</p>
                        </div>
                        <div className="reason__item__child">
                            <img src="assets/images/icon_dichvu.png" alt=""/>
                            <p>Dịch vụ khám ngoài giờ linh hoạt 24/7, thủ tục nhanh chóng</p>
                        </div>
                    </div>
                </div>
                <span>Bạn đang có vấn đề thắc mắc liên hệ với chúng tôi qua Hotline <span
                    className='color--red font-weight-bold'>024.6673.9999</span></span>
            </div>
            <Contact/>
        </div>
    )
}

export default FormReason
