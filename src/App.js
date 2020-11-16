import React,{useEffect, useState} from 'react';
import './App.css';
import firebase from './firebase'
import Header from './components/header/header.jsx'
import Slider from './components/imageslider/ImageSlider.jsx'
import HomeCard from './components/homeCard/HomeMixer.jsx'
import Footer from './components/footer/Footer.jsx'
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
import AdminLogin from './components/dashboard/AdminLogin.jsx';
import Login from './components/dashboard/Login';
import Search from './components/Search/Search.jsx'

function App() {
  const [{ userAdmin, users }, dispatch] = useStateValue();
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
          type:'SET_ADMIN',
          data:authUser
        })
      }
      dispatch({
        type:'SET_USER',
        users:authUser
      })
      }
      else{
        dispatch({
          type:'SET_USER',
          users:null
        })
      }
    })       

}, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {userAdmin?   <Route exact path='/admin'>
          <Admin />
          </Route> :''}
          <Route path="/wp-admin">
            <AdminLogin />
          </Route>
          {
             Object.keys(products).map((v,i)=>{
            return <Route path={`/productsdetails/${i}`}> <PDetails crdimg={products[v].img}
                title={products[v].title}
                price={products[v].price}
                oldprice={products[v].oldprice}
                id={i}
             />
             </Route>
             })}
         
          <Route exact path="/mall/">
            <InsideCard />
          </Route>
          <Route exact path="/search">
            <Search />
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