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
import InsideCard from './components/InsideCard/InsideCard.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footermobile from './components/footer/FooterMobile.jsx'

function App() {
  const screenSize = window.innerWidth;
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/mall/electronics">
            <InsideCard />
          </Route>
          <Route path="/clothes">
            clothes
          </Route>
          <Route path="/mall">
            <Slider />
            <Mall />
            <Mall />
          </Route>
          <Route path="/mart">
            Mall
          </Route>
          <Route path="/shop">

            Mall
          </Route>
          <Route exact path="/">
            <Slider />
            <HomeCard />
          </Route>
        </Switch>
        {screenSize < 500 ?
          <Footermobile /> : ''
        }
        <Footer />
      </div>
    </Router>
  );
}

export default App;
