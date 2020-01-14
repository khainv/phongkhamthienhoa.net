import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";

const SEO = props => {
    return (
        <Helmet
            titleTemplate="%s - Phòng khám đa khoa Thiện Hòa"
            defaultTitle="Phòng khám đa khoa Thiện Hòa - Tận tâm nhiệt tình"
        >
            {props.title && <title>{props.title}</title>}
            {props.description && <meta name="description" content={props.description}/>}
        </Helmet>
    )
}

export default SEO
