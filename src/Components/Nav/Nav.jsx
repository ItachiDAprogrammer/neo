import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = () => {
    return (
        <div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <Link class="navbar-brand" to="/">LOGO</Link>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbarColor01" >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/team">Team</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </nav>
    </div>
    )
}

export default Nav