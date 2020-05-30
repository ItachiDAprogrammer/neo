import React from 'react'
import Header from './Header/Header';
import About from './About/About';
import AboutUs from './AboutUs/AboutUs'
import Donate from './Donate/Donate';
import TeamLink from './TeamLink/TeamLink';

const Home = () => {
    return (
        <div>
			<Header />
			<About />
   			<AboutUs />
   			<Donate />
   			<TeamLink />
		</div>
    )
}

export default Home