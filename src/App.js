import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import Slider from './components/imageslider/ImageSlider.jsx'
// import NavButtons from './components/navButtons/navButtons.jsx'
import HomeCard from './components/homeCard/HomeMixer.jsx'
import MallCard from './components/homeCard/HomeCard.jsx'
import Footer from './components/footer/Footer.jsx'
import Mall from './components/mall/Mall.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <Switch>
          <Route exact path="/">
           <HomeCard />
          </Route>
          <Route path="/clothes">
            clothes
          </Route>
          <Route path="/mall">
            <Mall />
            <Mall />
          </Route>
          <Route path="/mart">
            Mall
          </Route>
          <Route path="/shop">

            Mall
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
