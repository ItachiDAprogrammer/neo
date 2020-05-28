import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import AboutUs from './Components/AboutUs/AboutUs'
import Donate from './Components/Donate/Donate';
import Team from './Components/Team/Team';

function App() {
  return (
    <>
   <Nav />
   <Header />
   <About />
   <AboutUs />
   <Donate />
   <Team />
   </>
  );
}

export default App;
