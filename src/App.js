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
import {useStateValue} from './StateProvider'
import Admin from './components/dashboard/admin';
import Login from './components/dashboard/Login';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const screenSize = window.innerWidth;
  document.title="Honesty"
  const [products, setProducts] = useState([])
  useEffect(() => {

    firebase.database().ref('/').on('value', snapshot => {
        if (snapshot.val() != null)
            for (const key in snapshot.val()) {
                setProducts(snapshot.val()[key])
            }
    })
    firebase.auth().onAuthStateChanged(authUser=>{
      if(authUser){
        if (authUser.email==='afnan@gmail.com'){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })       

}, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {user?   <Route exact path='/admin'>
          <Admin />
          </Route> :''}
        
         
          <Route exact path="/mall/">
            <InsideCard />
          </Route>
          <Route exact path="/clothes">
            clothes
          </Route>
         <Route path="/login">
           <Login />
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