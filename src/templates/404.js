import React from 'react'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Link from '../components/Link'
import NotFound from '../not_found.png'

const E404 = () => {
    return (
        <>
            <Header/>
            <div className='wrapper text-center p-10'>
                <h1>Not found</h1>
                <img src={NotFound} alt="Not found" className='img-fluid'/>
                <p><Link to='/'>Back to homepage</Link></p>
            </div>
            <Footer/>
        </>
    )
}

export default E404
