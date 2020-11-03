import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Slider from './components/imageslider/ImageSlider.jsx'
import HomeCard from './components/homeCard/HomeMixer.jsx'
import Footer from './components/footer/Footer.jsx'
import Mall from './components/mall/Mall.jsx'
import InsideCard from './components/InsideCard/InsideCard.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footermobile from './components/footer/FooterMobile.jsx'
import PDetails from './components/productsdetails/ProductsDetails.jsx';

function App() {
  const screenSize = window.innerWidth;
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/mall/">
            <InsideCard />
          </Route>
          <Route path="/clothes">
            clothes
          </Route>
          {/* <Route path="/mall">
            <Slider />
            <Mall />
            <Mall />
          </Route> */}
          <Route path="/productsdetails">
            <PDetails />
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
