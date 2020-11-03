import React from 'react'
import { MDBCard, MDBCardImage } from "mdbreact";
import { Link } from 'react-router-dom';
function MallCard(props) {
  return (
    <Link to="/mall/electronics">


<div className="card mallcard__products">
  <img src="https://cdn.shopify.com/s/files/1/2428/2519/products/airpods2_78066d0e-45c5-4cc8-8f30-64f83df0c43f_270x_crop_bottom.jpg?v=1599040701" alt="Denim Jeans"></img>
  <h2 className="mt-3 text-dark">Tailored Jeans</h2>
  <p className="price text-dark font-weight-bold">$19.99</p>
  <p>Some text about the jeans..</p>
</div>
    </Link>
  )
}

export default MallCard
