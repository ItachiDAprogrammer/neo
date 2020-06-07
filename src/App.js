import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import Gallery from './Components/Gallery/Gallery'
import { Route, Switch } from 'react-router-dom'


function App() {
    return (
        /* beautify preserve:start */
        <div>
        <Nav />
        <Switch>
			<Route exact path='/' component={Home} />
			<Route path='/team' component={Team} />
            <Route path='/gallery' component={Gallery} />
        </Switch>
        
        </div>
        /* beautify preserve:end */
    );
}

export default App;