import React,{useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from '../../assests/logo.png'
import {
    Link
} from "react-router-dom";

import './header.css'
import { useStateValue } from '../../StateProvider';
import firebase from '../../firebase'
import {useHistory} from 'react-router-dom';
function Header() {
    const [{ users }, dispatch] = useStateValue();
    const [search, setSearch] = useState(null)
    const [products, setProducts] = useState(null)
    const history = useHistory();
    const handleSignOut=()=>{
        if (users) {
        firebase.auth().signOut()
        history.push('/')
        }
        console.log('signout',users);
    }
    useEffect(()=>{
        firebase.database().ref('/').on('value', snapshot => {
            if (snapshot.val() != null)
                for (const key in snapshot.val()) {
                    setProducts(snapshot.val()[key])
                }
        })
        dispatch({
            type:'SET_SEARCH',
            data: search
        })
    
    },[search])
    const handleSearch=(e)=>{
        history.push('/search')
        dispatch({
            type:"SET_PRODUCTS",
            data:products
        })
       const prod = Object.keys(products).map((v,i)=>{
            return products[v].title.includes(search)?products[v].title:'';
        })
        dispatch({
            type:"PROD",
            data:prod
        })
    }
    const handleEnter=(e)=>{
        console.log('enter');
        if(e.keyCode==13)
        handleSearch();
    }
    return (
        <div className="header">
                <Link to="/">
                <img className="header__logo" src={Logo} alt="amazon" />
                </Link>
            <div className="header__search">
                <SearchIcon className="search__mobile"/>
              
                <input type="text" className="header__searchInput" onKeyDown={handleEnter} onChange={(e)=>setSearch(e.target.value)} placeholder="Search in store" />
                <SearchIcon className="header__searchIcon" onClick={handleSearch} />
             
            </div>
            <div className="header__nav">
            <Link to={!users && '/login'}>
                <div className="header__option">
                    <button onClick={handleSignOut} className="btn btn-primary">     {users ? 'Sign Out' : 'Sign In'}</button>
                </div>
            </Link>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__optionBasketCount">
                        0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
