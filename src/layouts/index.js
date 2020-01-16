import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet/es/Helmet";
const Layout = props => {
    return (
        <>
            <Header/>
            <Helmet>
                <script async src="https://namkhoathienhoa.com/cdtop/js/addtop.js"></script>
                <script async src="https://namkhoathienhoa.com/AddLeft/js/addleft.js"></script>
                <script async src="https://namkhoathienhoa.com/AddLeft/js/funs.js"></script>
            </Helmet>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout
