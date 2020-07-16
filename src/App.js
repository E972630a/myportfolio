import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={AboutMe} exact />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
