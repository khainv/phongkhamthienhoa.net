import React from 'react'
import {Link} from "react-router-dom";

const Url = props => {
    const href = props.to !== '/' ? `${props.to}.html` : props.to
    return (
        <Link {...props} to={href}>{props.children}</Link>
    )
}

export default Url
