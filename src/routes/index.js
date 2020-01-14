import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import loadable from '@loadable/component'

const Loading = loadable(() => import("../components/Loading"))
const Post = loadable(() => import("../templates/Post"))
const Category = loadable(() => import("../templates/Category"))
const Doctor = loadable(() => import("../templates/Doctor"))
const E404 = loadable(() => import("../templates/404"))
const ListDoctor = loadable(() => import("../templates/ListDoctor"))
const Page = loadable(() => import("../pages"))

const Routes = props => {
    const [data, setData] = useState(undefined)

    let slug = props.match.params.slug.replace('.html', '')

    useEffect(() => {
        Promise.all([
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/pages?slug=${slug}`)
                .then(pages => pages.json())
                .then(pagesJson => {
                    if (pagesJson.length > 0) {
                        return setData(pagesJson[0])
                    }
                })
                .catch(e => console.error(e)),
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts?slug=${slug}`)
                .then(posts => posts.json())
                .then(postsJson => {
                    if (postsJson.length > 0) {
                        return setData(postsJson[0])
                    }
                })
                .catch(e => console.error(e)),
            fetch(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/taxonomies`)
                .then(taxonomies => taxonomies.json())
                .then(taxonomiesJson => {
                    for (const key in taxonomiesJson) {
                        const url = taxonomiesJson[key]['_links']['wp:items'][0].href.replace(window.location.origin ? 'https://phongkhamthienhoa.net' : '', process.env.REACT_APP_API_URL)
                        fetch(`${url}?slug=${slug}`)
                            .then(res => res.json())
                            .then(resJson => {
                                // console.log(resJson)
                                if (resJson.length > 0) {
                                    return setData(resJson[0])
                                }
                            })
                            .catch(e => console.error(e))
                    }
                })
                .catch(e => console.error(e))
        ])

    }, [slug]);

    if (slug === 'doi-ngu-bac-si') {
        return <ListDoctor/>
    } else {
        if (data) {
            let type = data.type || data.taxonomy
            switch (type) {
                case 'post':
                    return <Post {...data}/>
                case 'page':
                    return <Page {...data}/>
                case 'category':
                    return <Category {...data}/>
                case 'doctors':
                    return <Doctor {...data}/>
                default:
                    return <E404/>
            }
        } else {
            return <Loading/>
        }
    }
}

export default withRouter(Routes)
