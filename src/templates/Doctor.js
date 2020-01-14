import React, {useEffect} from 'react'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import loadable from "@loadable/component";
const FormReason = loadable(() => import("../components/FormReason"))
const SidebarRight = loadable(() => import("../layouts/SidebarRight"))
const DoctorMore = loadable(() => import("../components/DoctorMore"))
const SEO = loadable(() => import("../components/SEO"))

const Doctor = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props])

    const breadcrumbs = [
        {name: 'Đội ngũ bác sĩ', href: '/doi-ngu-bac-si'},
        {name: props.name, href: props.slug},
    ]

    return (
        <>
            <SEO title={props.name}/>
            <Header/>
            <div className="doctor-page wrapper">
                <div className="col">
                    <Breadcrumbs data={breadcrumbs}/>
                    <div className="doctor__info">
                        <div className="doctor__avatar">
                            <img src={props.acf.avatar} alt={props.name}/>
                        </div>
                        <div className="doctor__detail">
                            <div className="doctor__detail__box--intro">
                                <div className="title">Giới thiệu</div>
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: props.description}}></div>
                            </div>
                            <div className="doctor__detail__box--regency">
                                <div className="title">Học vị, chức vụ</div>
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: props.acf.regency}}></div>
                            </div>
                            <div className="doctor__detail__box--exp">
                                <div className="title">Kinh nghiệm</div>
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: props.acf.experience}}></div>
                            </div>
                            <div className="doctor__detail__box--work">
                                <div className="title">Quá trình công tác</div>
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: props.acf.working_process}}></div>
                            </div>
                        </div>
                    </div>
                    <DoctorMore/>
                    <FormReason/>
                </div>
                <div className="col">
                    <SidebarRight/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Doctor
