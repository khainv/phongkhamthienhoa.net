import React from 'react'
import Link from './Link'

const Breadcrumbs = props => {
    const breadcrumbs = [
        {name: 'Trang chủ', href: '/', icon: 'assets/images/home.png', type: 'image'},
        ...props.data
    ]
    return (
        <ul className='breadcrumbs'>
            {breadcrumbs.map((breadcrumb, key) => (
                <li key={key}><Link to={breadcrumb.href}>{breadcrumb.type === 'image' ?
                    <img src={breadcrumb.icon} alt={breadcrumb.name}/> : breadcrumb.name}</Link></li>
            ))}
        </ul>
    )
}

export default Breadcrumbs
