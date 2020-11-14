import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from '../../assests/logo.png'
import {
    Link
} from "react-router-dom";
import './header.css'
import { useStateValue } from '../../StateProvider';
import firebase from '../../firebase'
function Header() {
    const [{ user }, dispatch] = useStateValue();
    const handleSignOut=()=>{
        if (user) {
        firebase.auth().signOut()
        }
        console.log('signout',user);
    }
    return (
        <div className="header">
                <Link to="/">
                <img className="header__logo" src={Logo} alt="amazon" />
                </Link>
            <div className="header__search">
                <SearchIcon className="search__mobile"/>
                <input type="text" className="header__searchInput" placeholder="Search in store" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
            <Link to={!user && '/login'}>
                <div className="header__option">
                    <button onClick={handleSignOut} className="btn btn-primary">     {user ? 'Sign Out' : 'Sign In'}</button>
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
