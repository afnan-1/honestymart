import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
function MallCard() {
    return (
      <Link to="/mall/electronics">

     
        <div className="mallcard">
           <MDBCard className="mx-2" collection>
      <MDBCardImage className="mall__card"  zoom src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg" />
      <div className="stripe light">
    
      </div>
    </MDBCard>
        </div>
        </Link>
    )
}

export default MallCard
