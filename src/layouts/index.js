import React, {useEffect} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet/es/Helmet";
const Layout = props => {
    useEffect(() => {
        const addtop = document.createElement('script');addtop.src = "https://namkhoathienhoa.com/cdtop/js/addtop.js";
        const popup1=document.createElement('script');popup1.src = "https://namkhoathienhoa.com/popup/js/popup.js";
        const popup2=document.createElement('script');popup2.src = "https://namkhoathienhoa.com/popup/js/funs.js";
    const script=addtop+popup1+popup2;
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
