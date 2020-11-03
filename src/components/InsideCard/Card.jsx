import Img1 from '../../assests/im1.jpeg';
import React from 'react'
import './insidecard.css'
function Card(props) {
    return (
        <div className="card__inside">
            
                <img src={Img1} alt="Avatar" className="crdimg" />
                <h3 className="cardinside__title text-muted">Best Selling items</h3>
                <span className="" style={{fontFamily:'Arial Black'}}>ACCESSORIES & SUPPLIES</span>
                <span className="font-weight-bold newprice">Rs.1200</span>
                <del className="font-weight-bold">Rs.1200</del>
            </div>
    )
}

export default Card
