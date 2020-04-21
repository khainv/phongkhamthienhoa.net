import React, {useEffect, useState} from 'react'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Loading from "../components/Loading";
import _ from 'lodash'
import Link from '../components/Link'
import Dimensions from '../components/Dimensions'
import loadable from "@loadable/component";

const Slideshow = loadable(() => import("../components/Slideshow"))
const FormReason = loadable(() => import("../components/FormReason"))
const SidebarRight = loadable(() => import("../layouts/SidebarRight"))
const SEO = loadable(() => import("../components/SEO"))

const Category = props => {
    const [authors, setAuthors] = useState([])
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [child, setChild] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loadMore, setLoadMore] = useState(true)

    const {width} = Dimensions()

    useEffect(() => {
        async function getData() {
            const data = await getChild(props.id)
            const child = _.flattenDeep(await Promise.all(data.map(async item => await getChild(item.id))))

            const cate = _.concat(props, data, child)
            const cate_ID = _.map(cate, 'id')

            setCategories(cate_ID)
            setChild(child)
            await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?categories=${_.join(cate_ID, ',')}`)
                .then(res => {
                    setTotalPage(res.headers.get('x-wp-totalpages'))
                    return res.json()
                })
                .then(resJson => {
                    setPosts(resJson)
                    setPage(p => p + 1)
                })
                .catch(e => console.error(e))
        }

        async function getChild(id) {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/categories?parent=${id}`)

            return res.json()
        }

        window.scrollTo(0, 0)
        getAllAuthor()
        getData().then(() => setLoading(false))

    }, [props])

    function getPosts(listCate = [], page = 1) {
        fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?categories=${_.join(listCate, ',')}&page=${page}`)
            .then(res => res.json())
            .then(resJson => {
                if (page < totalPage) {
                    setPosts(_.concat(posts, resJson))
                    setPage(page + 1)
                } else {
                    setLoadMore(false)
                }
            })
            .catch(e => console.error(e))
    }

    function getAllAuthor() {
        fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/users`)
            .then(res => res.json())
            .then(resJson => {
                if (resJson.length > 0)
                    setAuthors(resJson)
            })
            .catch(e => console.error(e))
    }

    function getAuthorName(id) {
        let author = _.find(authors, {id: id})
        return author ? author.name : false
    }

    const breadcrumbs = [
        {name: props.name, href: props.slug}
    ]

    if (loading) return <Loading/>

    return (
        <>
            <SEO title={props.name}/>
            <Header/>
            {width < 576 && <Slideshow id={props.id}/>}
            <div className="category-page wrapper">
                <div className="col">
                    <Breadcrumbs data={breadcrumbs}/>
                    {(child.length > 0 && width <= 768) &&
                    <ul className='collapse--category'>
                        <li key={props.id}>
                            <div className='collapse__header'><Link to={props.slug}>Danh mục bệnh</Link>
                                <button>{true ? '－' : '＋'}</button>
                            </div>
                            <ul className={true ? 'd-block' : 'd-none'}>
                                {child.map(category => <li key={category.id}><Link
                                    to={category.slug}>{category.name}</Link>
                                </li>)}
                            </ul>
                        </li>
                    </ul>
                    }
                    {posts.length > 0 &&
                    posts.map(post => (
                        <article key={post.id} className='article--category'>
                            <div className="header">
                                <div className="thumb">
                                    <Link to={post.slug}><img src={post.jetpack_featured_media_url}
                                                              alt={post.title.rendered}/></Link>
                                </div>
                                <div className="info">
                                    <p className='title'><Link to={post.slug}>{post.title.rendered}</Link></p>
                                    <div className='desc'
                                         dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                                </div>
                            </div>
                            <div className='body'>
                                <div className="author"><b>Tác giả:</b> {getAuthorName(post.author)}</div>
                                <div className="category"><b>Chuyên khoa:</b> {props.name}</div>
                                <div className="category"><Link to={post.slug}>Xem chi tiết</Link></div>
                            </div>
                        </article>
                    ))
                    }
                    {loadMore &&
                    <button className='btn--block' onClick={() => getPosts(categories, page)}>Xem thêm</button>}
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

export default Category
