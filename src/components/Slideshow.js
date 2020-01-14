import React, {useEffect, useState} from 'react'
import Swiper from 'react-id-swiper'
import Loading from '../components/Loading'
import Dimensions from '../components/Dimensions'

const Slideshow = props => {
    const [slideshow, setSlideshow] = useState([])
    const [loading, setLoading] = useState(true)
    const paramsBanner = {
        autoplay: true,
        loop: true
    }
    const {width} = Dimensions()

    useEffect(() => {
        async function getCategory(id) {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories/${id}`)
            return res.json()
        }

        async function getBanner(id) {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/banners/${id}`)

            return res.json()
        }

        async function getData() {
            const category = await getCategory(props.id)
            if (category.acf.slideshow && category.acf.slideshow.length > 0) {
                category.acf.slideshow.map(async id => {
                    const banner = await getBanner(id)
                    setSlideshow(s => [...s, banner.acf.image])
                })
            } else if (category.parent !== 0) {
                const parent = await getCategory(category.parent)
                if (parent.acf.slideshow && parent.acf.slideshow.length > 0) {
                    parent.acf.slideshow.map(async id => {
                        const banner = await getBanner(id)
                        setSlideshow(s => [...s, banner.acf.image])
                    })
                }
            }
        }

        getData().then(() => setLoading(false))
    }, [props.id])

    if (loading) return <Loading height={width * 300 / 414}/>

    if (slideshow.length > 0 && width <= 480) {
        return <Swiper {...paramsBanner}>
            {slideshow.map((image, key) => (
                <div key={key}>
                    <img src={image} alt="" className='img-fluid'/>
                </div>
            ))}
        </Swiper>
    } else {
        return false
    }
}

export default Slideshow
