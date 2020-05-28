import React, {useEffect} from "react";
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
        <div onClick={handleBurgerClick} className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Donate</a></li><li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </nav>

    </div>
  );
};

export default Nav;
