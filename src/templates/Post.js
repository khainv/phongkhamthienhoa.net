import React, {useState, useEffect} from 'react'
import loadable from '@loadable/component'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Loading from "../components/Loading";
import Link from '../components/Link'
import moment from 'moment'
import 'moment/locale/vi'
import Dimensions from "../components/Dimensions";

const Slideshow = loadable(() => import("../components/Slideshow"))
const FormReason = loadable(() => import("../components/FormReason"))
const SidebarRight = loadable(() => import("../layouts/SidebarRight"))
const SEO = loadable(() => import("../components/SEO"))

moment.locale('vi')

const Post = props => {
    const [breadcrumbs, setBreadcrumbs] = useState([{name: props.title.rendered, href: props.slug}])
    const [postRelated, setPostRelated] = useState([])
    const [author, setAuthor] = useState('Ẩn danh')
    const [doctor, setDoctor] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {width} = Dimensions()

    useEffect(() => {
        async function getData() {
            if (props.categories && props.categories.length > 0) {
                Promise.all([
                    // lấy danh mục của bài viết
                    fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories/${props.categories[0]}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setBreadcrumbs(b => [{name: resJson.name, href: resJson.slug}, ...b])
                            setDoctor(resJson.acf.doctor)
                        })
                        .catch(e => console.error(e)),
                    // lấy các bài viết liên quan
                    fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?categories=${props.categories[0]}&per_page=3`)
                        .then(res => res.json())
                        .then(resJson => {
                            setPostRelated(resJson)
                        })
                        .catch(e => console.error(e)),
                    // lấy tên tác giả
                    fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/users/${props.author}`)
                        .then(res => res.json())
                        .then(resJson => {
                            setAuthor(resJson.name)
                        })
                        .catch(e => console.error(e)),
                ])
                    .catch(e => console.error(e))
            }
        }

        getData().then(() => setLoading(false))

        window.scrollTo(0, 0)
    }, [props.author, props.categories, props.type])

    if (loading) return <Loading/>
    return (
        <>
            <SEO title={props.title.rendered}/>
            <Header/>
            {(width < 576 && props.categories) && <Slideshow id={props.categories[0]}/>}
            <div className="article-page wrapper">
                <div className="col">
                    <Breadcrumbs data={breadcrumbs}/>
                    <article className='article--simple'>
                        <h1 className='title--article-simple'>{props.title.rendered}</h1>
                        <div className="article--detail">
                            <div className="author">Tác giả: <span className='content'>{author}</span></div>
                            <div className="viewed">Lượt xem: {Math.floor(Math.random() * 10000)}</div>
                            {doctor && <div className="doctor">Tham vấn y khoa: <span className='content'><Link
                                to={doctor.slug}>{doctor.name}</Link></span>
                            </div>}
                        </div>
                        <div className="article--content" dangerouslySetInnerHTML={{__html: props.content.rendered}}/>
                    </article>
                    {postRelated.length > 0 &&
                    <>
                        <h3 className='post-related--title'>Bài viết liên quan</h3>
                        <section className="post-related">
                            {postRelated.map(post => (
                                <div className="post-related--article" key={post.id}>
                                    <div className="header">
                                        <Link to={post.slug}><img src={post.jetpack_featured_media_url}
                                                                  alt={post.title.rendered}/></Link>
                                    </div>
                                    <div className='body'>
                                        <p className='title'><Link to={post.slug}>{post.title.rendered}</Link></p>
                                        <p className='excerpt'>{post.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')}</p>
                                        <span className='time'>{moment(post.date).fromNow()}</span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                    }
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

export default Post
