import React from 'react'
import './insidecard.css'
function Card(props) {
    return (
        <div className="card__inside">
            <p className="cardinside__title">ACCESSORIES & SUPPLIES</p>
            <img className="card__img" src={props.imageurl} alt=""/>
        </div>
    )
}

export default Card
