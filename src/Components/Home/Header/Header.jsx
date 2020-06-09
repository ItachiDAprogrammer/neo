import React from 'react'
import './Header.css'
const Header = () => {
    const logo = require('../../../assets/logo.png')
    return (
        <div>
        <div className="pimg1">
        <img id='logo-big' src={logo}/>
            <div className="main-header">
                <h1 className='hh1'>Teens With Vision</h1>
                <p className='hh2'>Young, powerful, and fantastic minds</p>
            </div>
        </div>
       </div>
    )
}

export default Header