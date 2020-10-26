import React from 'react'
import './footermobile.css'
import {Link} from 'react-router-dom';
function FooterMobile() {
    return (
        <div className="footermobile">
            <Link to="/">
            <div className="footermobile__img">
            <img  className="footermobile___img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l7UZZ8r0gK0jSZFnXXbRRXXa.gif" alt=""/>
            <span>Home</span>
            
            </div>
            </Link>
            <div className="footermobile__img">
            <img className="footermobile___img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l7UZZ8r0gK0jSZFnXXbRRXXa.gif" alt=""/>
            <span>Mall</span>
            </div>
            <div className="footermobile__img">
            <img className="footermobile___img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l7UZZ8r0gK0jSZFnXXbRRXXa.gif" alt=""/>
            <span>Mart</span>
            </div>
            <div className="footermobile__img">
            <img className="footermobile___img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l7UZZ8r0gK0jSZFnXXbRRXXa.gif" alt=""/>
            <span>Shop</span>
            </div>
            
        </div>
    )
}

export default FooterMobile
