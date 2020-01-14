import Link from '../components/Link'
import moment from "moment";
import Swiper from "react-id-swiper";
import React, {useState, useEffect} from "react";
import Loading from "../components/Loading";
import 'moment/locale/vi'

moment.locale('vi')

const SidebarRight = () => {
    const [categories, setCategories] = useState([])
    const [childCategories, setChildCategories] = useState([])
    const [postNew, setPostNew] = useState([])
    const [keyCollapse, setKeyCollapse] = useState(undefined)
    const [toggleCollapse, setToggleCollapse] = useState(true)
    const [loading, setLoading] = useState(true)

    const paramsAds = {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }

    useEffect(() => {
        Promise.all([
            // lấy tất cả danh mục
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories?parent=0&include=102056019,102056011,102056008,102055953,102056000,102056005`)
                .then(res => res.json())
                .then(resJson => {
                    setCategories(resJson)
                })
                .catch(e => console.error(e)),
            // lấy các bài viết mới nhất
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?per_page=5`)
                .then(res => res.json())
                .then(resJson => {
                    setPostNew(resJson)
                })
                .catch(e => console.error(e)),
        ])
            .then(() => {
                setLoading(false)
            })
            .catch(e => console.error(e))
    }, [])

    function getChild(id, key) {
        if (key === keyCollapse) return setToggleCollapse(!toggleCollapse)
        fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories?parent=${id}`)
            .then(res => res.json())
            .then(resJson => {
                setChildCategories(resJson)
                setKeyCollapse(key)
                setToggleCollapse(true)
            })
            .catch(e => console.error(e))
    }

    if (loading) return <Loading/>

    return (
        <>
            {categories.length > 0 &&
            <div className="category__list">
                <div className="box--title">Chuyên khoa</div>
                <ul className='collapse'>
                    {categories.map((category, key) => (
                        <li key={category.id}>
                            <div className='collapse__header'><Link to={category.slug}>{category.name}</Link>
                                <button
                                    onClick={() => getChild(category.id, key)}>{(toggleCollapse && keyCollapse === key) ? '－' : '＋'}
                                </button>
                            </div>
                            {childCategories.length > 0 &&
                            <ul className={(toggleCollapse && keyCollapse === key) ? 'd-block' : 'd-none'}>
                                {childCategories.map(category => <li key={category.id}><Link
                                    to={category.slug}>{category.name}</Link>
                                </li>)}
                            </ul>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            }
            {postNew.length > 0 &&
            <>
                <div className="box--title">Bài viết mới nhất</div>
                <div className="article__new">
                    {postNew.map(post => (
                        <article key={post.id}>
                            <div className="header">
                                <Link to={post.slug}><img src={post.jetpack_featured_media_url}
                                                          alt={post.title.rendered}/></Link>
                            </div>
                            <div className='body'>
                                <p className='title'><Link to={post.slug}>{post.title.rendered}</Link></p>
                                <span className='time'>{moment(post.date).fromNow()}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </>
            }
            <Swiper {...paramsAds}>
                <div>
                    <a href="#ads02">
                        <img src="assets/images/ads02.jpg" alt=""
                             className="img-fluid"/>
                    </a>
                </div>
                <div>
                    <a href="#ads01">
                        <img src="assets/images/ads01.jpg" alt=""
                             className="img-fluid"/>
                    </a>
                </div>
            </Swiper>
        </>
    )
}

export default SidebarRight
