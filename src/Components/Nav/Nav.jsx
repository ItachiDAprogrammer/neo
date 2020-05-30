import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const handleBurgerClick = () => {
        const navLinks = document.querySelector('.nav-links')
        const links = document.querySelectorAll('.nav-links li')

        navLinks.classList.toggle('open')
        links.forEach(link => link.classList.toggle('fade'))
    }

    return (<div>
      <nav>
        <div onClick={handleBurgerClick} className="burger" >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about" >about</Link>
          </li>
          <li>
          <Link to="/mission" >Mission</Link>
          </li>
          <li>
          <Link to="/donate" >Donate</Link>
          </li>
          <li>
          <Link to="/team" >Team</Link>
          </li>
          <li>
          <Link to="/contact" >Contact</Link>
          </li>
          <li>
          <Link to="/gallery" >Gallery</Link>
          </li>
        </ul>
      </nav>

    </div>);
};

export default Nav;