import React,{useEffect, useState} from 'react';
import './App.css';
import firebase from './firebase'
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
import acrd1 from './assests/airpods2/crdimg.jpg'
import acrd2 from './assests/airpodspro/crdimg.jpg'
import acrd3 from './assests/airpodspro4/crdimg.jpg'
import lcrd1 from './assests/lenovo/crdimg.jpg'
import s1 from './assests/airpodspro/s1.jpg';
import s2 from './assests/airpodspro/s2.jpg';
import s3 from './assests/airpodspro/s3.jpg';
import aa1 from './assests/airpods2/s1.jpg';
import aa2 from './assests/airpods2/s2.jpg';
import aa3 from './assests/airpods2/s3.jpg';
import b1 from './assests/airpodspro4/a1.jpg';
import b2 from './assests/airpodspro4/a2.jpg';
import b3 from './assests/airpodspro4/a3.jpg';
import c1 from './assests/lenovo/l1.jpg';
import c2 from './assests/lenovo/l2.jpg';
import c3 from './assests/lenovo/l3.jpg';
import Admin from './components/dashboard/admin';

function App() {
  const screenSize = window.innerWidth;
  document.title="Honesty"
  const a1={
    price:'2700',
    oldprice:'3000',
    desc:`Second-generation EarPods are a real treat. They're faster, more convenient to charge, make you sound better.
    EarPods are well-built, comfortable earbuds that have a pleasing lightweight build and premium feel.
   Can easily recharge battery case with a wireless pad
   After a simple one-tap setup, EarPods work like magic. They re automatically on and always connected. EarPods can even sense when they re in your ears and pause when you take them out.
   Unique and Distinguishable Design. `,
    title:'AIR PODS GENERATION 2',
    crdimg:acrd1,
    smallimg:[aa1,aa2,aa3]
  }
  const a2={
    price:'3900',
    oldprice:'3500',
    desc:`PRODUCT DETAILS:
    .Active noise cancellation for immersive sound
    .Transparency mode for hearing and connecting with the world around you
    .Three sizes of soft, tapered silicone tips for a customization fit
    .Sweat and water resistant
    .Adaptive EQ automatically tunes music to the shape of your ear
    .Easy setup for all your devices
    .The Wireless Charging Case delivers more than 24 hours of battery life`,
    title:'AIR PODS PRO',
    crdimg:acrd2,
    smallimg:[s1,s2,s3]
  }
  const a3={
    price:'2700',
    oldprice:'3200',
    desc:`-Airpods Pro4 function 
    -Pop up animation connect for iOS & Andriod 
    -The AirPods 4.0 Is A Super High Copy Product & It Can -Support Until Latest iPhone & Andriod 
    -Also Can Support Android ✔️
    -For IOS: A window pops up indicating earphones are ready to connect, just click "Connect" 
    -For Android OS: Enable the Bluetooth pairing mode on your phone device. 
    -Smart Sensor (In-Ear Detection): remove headphones, the music paused/bring headphones, music start
    -Voice Assistance support Hey Siri
    -Battery level indicator
    -Wireless Charging`,
    title:'Air pod pro 4',
    crdimg:acrd3,
    smallimg:[b1,b2,b3]
  }
  const l1={
    price:'3300',
    oldprice:'3500',
    desc:`.Reverse magnetic lid
    .Pop up animation connect (Open the lid, no need to take out the Earbuds)
    .Android smartphone Open the lid to search bluetooth name to pairing
    .Super 1:1 Third Generation
    .Bluetooth Rename & GPS Location
    .Pressure Sensor Control
    .With Smart In-ear Sensor HD Mic
    .Separate Use Left & Right Earbuds L/R
    .Wireless Charging Pop up 3 Real Battery show !
    .Enhanced bass/audio quality Super bass
    .Auto power on/off Binaural calls
    .Previous song, Next song
    .Voice assistant Wake up Siri`,
    title:'Lenove LP 1',
    crdimg:lcrd1,
    smallimg:[c1,c2,c3]
  }
  const [products, setProducts] = useState([])
  useEffect(() => {

    firebase.database().ref('/').on('value', snapshot => {
        if (snapshot.val() != null)
            for (const key in snapshot.val()) {
                setProducts(snapshot.val()[key])
            }
    })
}, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/admin'>
          <Admin />
          </Route>
          <Route exact path="/mall/">
            <InsideCard />
          </Route>
          <Route exact path="/clothes">
            clothes
          </Route>
         
          <Route exact path="/shop">

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