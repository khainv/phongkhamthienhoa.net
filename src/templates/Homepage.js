import React, {useState, useEffect} from 'react'
import Layout from '../layouts'
import Swiper from 'react-id-swiper'
import Link from '../components/Link'
import Loading from "../components/Loading";
import loadable from "@loadable/component";
import Dimensions from "../components/Dimensions";

const Contact = loadable(() => import("../components/Contact"))
const Comment = loadable(() => import("../components/Comment"))

const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Promise.all([
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts`)
                .then(res => res.json())
                .then(resJson => setPosts(resJson))
                .catch(e => console.error(e)),

            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/doctors`)
                .then(res => res.json())
                .then(resJson => setDoctors(resJson))
                .catch(e => console.error(e))
        ]).then(() => setLoading(false))

    }, [])
    const reviews = [
        {
            avatar: 'https://ui-avatars.com/api/?name=Kim Ngân',
            comment: `So với thông tin trên mạng thì khi đến tôi thấy phòng khám sạch sẽ, thoáng mát, bố trí hợp lý hơn nhiều, bác sĩ tận tình. Nhân viên cũng thoải mái, nói chuyện nhẹ nhàng. Cứ hợp thầy hợp thuốc thì bệnh gì cũng chữa được. Tôi cảm thấy rất hài lòng với dịch vụ của phòng khám đa khoa Thiện Hòa.`
        },
        {
            avatar: 'https://ui-avatars.com/api/?name=Hằng Đỗ',
            comment: `Phòng khám đa khoa Thiện Hòa là lựa chọn đúng đắn của tôi, vừa bước vào đã được đón tiếp tận tình sau đó đăng kí khám rất nhanh không phải xếp hàng chờ lâu. Khi vào thăm khám bác sĩ tư vấn và khám rất kĩ không qua loa sơ sài như một số nơi, khiến tôi rất yên tâm.`
        },
        {
            avatar: 'https://ui-avatars.com/api/?name=xoan vinh',
            comment: `Khi đến phòng khám Thiện Hòa tôi đã rất ngạc nhiên bởi sự rộng rãi, khang trang, các thiết bị đầy đủ. Khi được thăm khám thì bác sĩ cũng như y tá rất nhẹ nhàng, chu đáo, tư vấn và hướng dẫn tận tình. Đặc biệt là không cần chờ đợi xếp hàng như ở bệnh viện công mà còn được bác sĩ thăm khám cẩn thận hơn. Tôi sẽ giới thiệu thêm cho bạn bè của tôi biết đến phòng khám.`
        },
        {
            avatar: 'https://ui-avatars.com/api/?name=bảo anh nguyễn',
            comment: `Em đã đi khám phụ khoa khá nhiều nơi nhưng phòng khám Thiện hòa khiến em hài lòng nhất. Dụng cụ khám và các thiết bị đều rất mới hiện đại, đặc biệt là rất sạch sẽ mỗi người một bộ dụng cụ khác nhau. Không những vậy còn có những gói ưu đãi giúp tiết kiệm chi phí khám vì thế nếu chị em nào không may bị viêm nhiễm phụ khoa như em thì nên qua phòng khám để khám sớm nhé. Để lâu ảnh hưởng đến sức khỏe sinh sản của chị em mình lắm.`
        },
        {
            avatar: 'https://ui-avatars.com/api/?name=anh thư',
            comment: `Tình cờ mình thấy quảng cáo gói ưu đãi khám phụ khoa của phòng khám đa khoa Thiện Hòa nên cũng tò mò xem bản thân có bị gì không nên mình đã đăng ký gói ưu đãi khám phụ khoa của phòng khám. Mình đăng ký qua website và được các bạn tư vấn hỗ trợ rất nhiệt tình. Theo lịch hẹn mình đến khám, sau khi trình bày và gửi mã khám thì bạn lễ tân có hướng dẫn mình chi tiết quy trình khám và sắp xếp cho mình bác sĩ nữ thăm khám. Kết quả trả về mình chỉ bị viêm vùng kín nhẹ, cũng may khám và phát hiện sớm nên mình điều trị theo chỉ định của bác sĩ và đến nay không thấy tái phát nữa. Mình vẫn qua phòng khám kiểm tra định kỳ vì gần nhà và tiện ở chỗ là không phải đợi lâu.`
        }
    ]
    const paramsDoctors = {
        autoplay: true,
        loop: true,
        spaceBetween: 25,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    }
    const paramsReviews = {
        slidesPerView: 1,
        slidesPerColumn: 5,
    }
    const {width} = Dimensions()
    if (loading) return <Loading></Loading>
    return (
        <Layout>
            <Swiper style={{overflow: 'hidden'}}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((image, index) => (
                    <a href={process.env.REACT_APP_LIVECHAT} key={index}>
                        <img src={`assets/images/banners/${width <= 480 ? 'mb' : 'pc'}/${image}.jpg`} alt=""
                             className="img-fluid"/>
                    </a>
                ))}
            </Swiper>
            <section className="category--home">
                <ul className="wrapper">
                    <li><Link to='/benh-nam-khoa'>
                        <img src="assets/images/icon_nk.png" alt=""/>
                        <p>nam khoa</p>
                    </Link></li>
                    <li><Link to='/benh-phu-khoa'>
                        <img src="assets/images/icon_pk.png" alt=""/>
                        <p>phụ khoa</p>
                    </Link></li>
                    <li><Link to='/benh-xa-hoi'>
                        <img src="assets/images/icon_bxh.png" alt=""/>
                        <p>bệnh xã hội</p>
                    </Link></li>
                    <li><Link to='/ke-hoach-hoa-gia-dinh'>
                        <img src="assets/images/icon_khh.png" alt=""/>
                        <p>kế hoạch hóa</p>
                    </Link></li>
                    <li><Link to='/benh-da-lieu'>
                        <img src="assets/images/icon_bdl.png" alt=""/>
                        <p>bệnh da liễu</p>
                    </Link></li>
                    <li><a href={process.env.REACT_APP_LIVECHAT}>
                        <img src="assets/images/icon_ud.png" alt=""/>
                        <p>ưu đãi hấp dẫn</p>
                    </a></li>
                </ul>
            </section>
            <section className="introduce wrapper">
                <div className="introduce__info">
                    <p className="introduce__info--title">GIỚI THIỆU PHÒNG KHÁM</p>
                    <p className="introduce__info--subtitle">ĐA KHOA THIỆN HÒA</p>
                    <p className="introduce__info--content">Với tiêu chí “Tận tâm nhiệt tình - Ấm áp như gia đình” Phòng
                        khám đa khoa
                        Thiện Hòa là địa chỉ uy tín, được
                        đông đảo người dân lựa chọn thăm khám và điều trị bệnh. Được thành lập từ năm 2012 đến nay phòng
                        khám đã
                        thăm khám và điều trị bệnh cho hàng trăm ngàn lượt bệnh nhân, mang lại niềm hi vọng mới cho
                        nhiều người mắc
                        bệnh nam giới, phụ khoa, bệnh xã hội... thoát khỏi gánh nặng bệnh tật. Chúng tôi luôn nỗ lực
                        không ngừng
                        hoàn thiện và nâng cao chất lượng dịch vụ để mang lại sự hài lòng hơn nữa cho tất cả người bệnh
                        khi lựa chọn
                        phòng khám đa khoa Thiện Hòa để chăm sóc sức khỏe.</p>
                </div>
                <div className="introduce__video">
                    <div className="wrapper--video">
                        <iframe title='Video giới thiệu phòng khám đa khoa Thiện Hòa'
                                width="560" height="315" src="https://www.youtube.com/embed/Cim88D3ZpWs" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            {doctors.length > 0 && <section className="doctors">
                <p className='doctors--title'>Đội ngũ y bác sĩ</p>
                <div className="wrapper">
                    <Swiper {...paramsDoctors}>
                        {doctors.map(doctor => (
                            <div className="doctor" key={doctor.id}>
                                <Link to={doctor.slug}><img src={doctor.acf.avatar} alt={doctor.name}
                                                            className="doctor--avatar"/></Link>
                                <div className="doctor__body">
                                    <p className="doctor--title">{doctor.acf.subtitle}</p>
                                    <p className="doctor--name">{doctor.name}</p>
                                    <div dangerouslySetInnerHTML={{__html: doctor.acf.regency}}></div>
                                </div>
                                <div className="doctor__footer">
                                    <div className="doctor--action">
                                        <a href={process.env.REACT_APP_LIVECHAT}
                                           className="btn--red">Tư vấn</a>
                                        <Link className="btn--green" to={doctor.slug}>Xem thêm</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Swiper>
                </div>
            </section>}
            <section className="clinic">
                <div className="wrapper">
                    <div className="rate">
                        <img src="assets/images/chatluong.png" alt=""/>
                    </div>
                    <img src="assets/images/phongkham.png" alt="" className="pk--1"/>
                    <div className="clinic__doctor">
                        <p className="clinic__doctor--title">Vì sao bạn</p>
                        <p className="clinic__doctor--title">nên chọn chúng tôi</p>
                        <ul>
                            <li>Phòng khám được Sở y tế cấp phép hoạt động.</li>
                            <li>Cơ sở vật chất hiện đại, thiết bị thăm khám nhập khẩu từ nước ngoài.</li>
                            <li>Đội ngũ y bác sĩ chuyên khoa giàu kinh nghiệm, chuyên môn cao.</li>
                            <li>Đội ngũ nhân viên y tế chu đáo, nhiệt tình hướng dẫn cho người bệnh.</li>
                            <li>Chi phí khám và điều trị được niêm yết theo quy định pháp luật.</li>
                            <li>Dịch vụ khám ngoài giờ linh hoạt 24/7, thủ tục nhanh chóng.</li>
                        </ul>
                        <img src="assets/images/phongkham2.png" alt="" className="pk--2"/>
                    </div>
                </div>
            </section>
            <section className="others">
                <div className="wrapper">
                    <div className="col">
                        <p className="title--border-bottom">Ý kiến của bệnh nhân</p>
                        <div className="reviews">
                            <Swiper {...paramsReviews}>
                                {reviews.map((review, key) => <Comment key={key} {...review}/>)}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col">
                        <p className="title--border-bottom">Bài viết</p>
                        <div className="news">
                            {posts.length > 0 && posts.map((post, key) => {
                                if (key < 3)
                                    return (
                                        <article key={post.id}>
                                            <Link to={post.slug}><img
                                                src={post.jetpack_featured_media_url}
                                                alt="" className="img-fluid"/></Link>
                                            <div className="content--article">
                                                <p className="title--article"><Link
                                                    to={post.slug}>{post.title.rendered}</Link>
                                                </p>
                                                <div className="desc--article"
                                                     dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                                            </div>
                                        </article>
                                    )
                                else return false
                            })}
                        </div>
                    </div>
                    <div className="col">
                        <div className="ads">
                            <img src="assets/images/ads01.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="procedure">
                <div className="wrapper">
                    <p className="title--procedure">quy trình khám bệnh</p>
                    <div className="image">
                        <div className="laptop">
                            <img src="assets/images/quytrinh.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="tablet">
                            <div>
                                <img src="assets/images/B1.png" alt="" className="img-fluid"/>
                            </div>
                            <div>
                                <img src="assets/images/B2.png" alt="" className="img-fluid"/>
                            </div>
                            <div>
                                <img src="assets/images/B3.png" alt="" className="img-fluid"/>
                            </div>
                            <div>
                                <img src="assets/images/B4.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <Contact/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Homepage
