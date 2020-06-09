import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'


ReactDOM.render(
    <React.StrictMode>
  <BrowserRouter>
  <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);