import React from 'react'
import Header from './Header/Header';
import About from './About/About';
import AboutUs from './AboutUs/AboutUs'
import Donate from './Donate/Donate';
import TeamLink from './TeamLink/TeamLink';
import Form from './Form/Form'

const Home = () => {
    return (
        <div>
			<Header />
			<About />
   			<AboutUs />
   			<TeamLink />
   			<Donate />
   			<Form />
		</div>
    )
}

export default Home