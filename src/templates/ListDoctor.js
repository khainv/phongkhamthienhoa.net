import React, {useEffect, useState} from 'react'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from '../components/Link'
import Loading from "../components/Loading";
import loadable from "@loadable/component";
const FormReason = loadable(() => import("../components/FormReason"))
const SidebarRight = loadable(() => import("../layouts/SidebarRight"))
const SEO = loadable(() => import("../components/SEO"))

const ListDoctor = () => {
    const [doctors, setDoctors] = useState([
        {
            name: "bác sĩ chuyên khoa nam khoa",
            class: 'nk',
            data: []
        },
        {
            name: "bác sĩ chuyên khoa phụ khoa",
            class: 'pk',
            data: []
        },
        {
            name: "bác sĩ siêu âm, xét nghiệm",
            class: 'xn',
            data: []
        },
        {
            name: "bác sĩ chuyên khoa phục hồi chức năng",
            class: 'ph',
            data: []
        },
        {
            name: "bác sĩ đông y",
            class: 'dy',
            data: []
        },
    ])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const per_page = 10
    const url = `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/doctors?per_page=${per_page}`
    const breadcrumbs = [
        {name: 'Đội ngũ bác sĩ', href: '/doi-ngu-bac-si'}
    ]

    useEffect(() => {
        fetch(url)
            .then(res => {
                setTotalPage(res.headers.get('x-wp-totalpages'))
                return res.json()
            })
            .then(resJson => {
                setPage(p => p + 1)
                resJson.map(doctor => {
                    let specialist = parseInt(doctor.acf.specialist) - 1
                    doctors[specialist].data.push(doctor)
                    return setDoctors(doctors)
                })
            })
            .then(() => setLoading(false))
            .catch(e => console.error(e))
    }, [doctors, url])

    function loadMore() {
        fetch(`${url}&page=${page}`)
            .then(res => res.json())
            .then(resJson => {
                resJson.map(doctor => {
                    let specialist = parseInt(doctor.acf.specialist) - 1
                    doctors[specialist].data.push(doctor)
                    return setDoctors(doctors)
                })
            })
            .then(() => setPage(page + 1))
            .catch(e => console.error(e))
        window.scrollTo(0, 0)
    }

    if (loading) return <Loading/>

    return (
        <>
            <SEO title='Đội ngũ bác sĩ'/>
            <Header/>
            <div className="list-doctor-page wrapper">
                <div className="col">
                    <Breadcrumbs data={breadcrumbs}/>
                    {doctors.map((item, key) => {
                        if (item.data.length > 0)
                            return (
                                <div key={key}>
                                    <p className={`title--border-bottom--${item.class}`}>{item.name}</p>
                                    <div className='doctor__list'>
                                        {item.data.map(doctor => (
                                            <div className="doctor" key={doctor.id}>
                                                <img src={doctor.acf.avatar} alt={doctor.name}
                                                     className="doctor--avatar"/>
                                                <div className="doctor__body">
                                                    <p className="doctor--title">{doctor.acf.subtitle}</p>
                                                    <p className="doctor--name">{doctor.name}</p>
                                                    <div className='doctor--regency'
                                                         dangerouslySetInnerHTML={{__html: doctor.acf.regency}}></div>
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
                                    </div>
                                </div>
                            )
                        else return false
                    })}
                    {totalPage >= page && <button onClick={loadMore} className='btn--block'>Xem thêm Bác sĩ</button>}
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

export default ListDoctor
