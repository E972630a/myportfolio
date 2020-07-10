import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={AboutMe} exact />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
