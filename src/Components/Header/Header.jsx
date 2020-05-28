import React from 'react'
import './Header.css'
const Header = () => {
    const logo = require('../../assets/logo.png')
    return (
       <div>
        <div className="pimg1">
            <div className="main-header ptext">
                <img id='logo-big' src={logo}/>
                <h1>Teens With Vision</h1>
                <p>Young, powerful, and fantastic minds</p>
        </div>
        </div>
       </div>
    )
}

export default Header
