import React, {useEffect} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet/es/Helmet";
const Layout = props => {
    useEffect(() => {
        const addtop = document.createElement('script'); addtop.src = "https://namkhoathienhoa.com/cdtop/js/addtop.js";
    const script= addtop;
    /*script.async = true;*/
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
