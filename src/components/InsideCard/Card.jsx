
import React from 'react'
import './insidecard.css'
import { Link } from 'react-router-dom';
// let history = useHistory()
function Card(props) {


    return (
        <Link to={`productsdetails/${props.id}`}>
            <div className="card__inside">
                <img src={props.imageurl} alt="Avatar" className="crdimg" />
                <h3 className="cardinside__title text-muted">Best Selling items</h3>
                <span className="crd__title2">{props.cardtitle}</span>
                <span className="font-weight-bold newprice">Rs.{props.price}</span>
                <del className="crd__price_old">Rs.{props.oldprice}</del>
            </div>
        </Link>
    )
}

export default Card
