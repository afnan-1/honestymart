import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Logo from '../../assests/logo.png'
import {
    Link
} from "react-router-dom";
import './header.css'

function Header() {
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
                <div className="header__option">
                    <button className="btn btn-primary">Signup</button>
                </div>
                <div className="header__option">
                    <button className="btn btn-primary">Login</button>
                </div>

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
