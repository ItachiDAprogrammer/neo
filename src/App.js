import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import Gallery from './Components/Gallery/Gallery'
import { Route, Switch } from 'react-router-dom'
import SimpleReactLightbox from "simple-react-lightbox"


function App() {
    return (
        /* beautify preserve:start */
        <SimpleReactLightbox>
        <Nav />
        <Switch>
			<Route exact path='/' component={Home} />
			<Route path='/team' component={Team} />
            <Route path='/gallery' component={Gallery} />
        </Switch>
        
        </SimpleReactLightbox>
        /* beautify preserve:end */
    );
}

export default App;