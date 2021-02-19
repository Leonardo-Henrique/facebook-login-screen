import React from 'react'

import '../styles/style.css'
import LeftBox from './Left-box'
import RightBox from './Right-box'
import Footer from './Footer'



export default () => {
    return(
        <>
            <section className="main">

                <div className="center">
                    <LeftBox></LeftBox>
                    <RightBox></RightBox>
                </div>

            </section>

            <Footer/>
        </>
    )
}