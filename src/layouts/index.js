import React, {useEffect} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet/es/Helmet";
const Layout = props => {
    useEffect(() => {
        const script = document.createElement('script');

    script.src = "https://namkhoathienhoa.com/cdtop/js/addtop.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
}, []);

    return (
        <>
            <Header/>

            {props.children}
            <Footer/>
        </>
    )
}

export default Layout
