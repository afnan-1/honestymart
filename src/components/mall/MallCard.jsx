import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";

function MallCard() {
    return (
        <div className="mallcard">
           <MDBCard className="mx-2" collection>
      <MDBCardImage style={{width:'100%',height:'25rem'}}  zoom src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg" />
      <div className="stripe light">
        <a href="#!">
        </a>
      </div>
    </MDBCard>
        </div>
    )
}

export default MallCard
