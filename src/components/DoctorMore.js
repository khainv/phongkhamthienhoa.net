import React, {useState, useEffect} from 'react'
import Link from './Link'
import Loading from "./Loading";

const DoctorMore = props => {
    const [loading, setLoading] = useState(true)
    const [doctorsMore, setDoctorsMore] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/doctors?per_page=3`)
            .then(res => res.json())
            .then(resJson => {
                setDoctorsMore(resJson)
            })
            .then(() => setLoading(false))
            .catch(e => console.error(e))
    }, [])

    if (loading) return <Loading/>

    return (
        <>
            <div className="title--border-bottom--green">Xem thêm bác sĩ</div>
            <section className="doctors--more">
                {doctorsMore.map(doctor => (
                    <div className="doctor" key={doctor.id}>
                        <Link to={doctor.slug}><img src={doctor.acf.avatar} alt={doctor.name}
                                                    className="doctor--avatar"/></Link>
                        <div className="doctor__body">
                            {/*<p className="doctor--title">{doctor.acf.subtitle}</p>*/}
                            {/*<p className="doctor--name">{doctor.name}</p>*/}
                            <div dangerouslySetInnerHTML={{__html: doctor.acf.regency}}></div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default DoctorMore
