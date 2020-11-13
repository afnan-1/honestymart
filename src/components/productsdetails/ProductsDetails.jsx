import React, { useState } from 'react'
import './productdetails.css'

function ProductsDetails(props) {
    document.title=props.title
    const [img, setimg] = useState(props.crdimg)
    const handleImage = (e) => {
        setimg(e.target.src)
    }
    const msgme=()=>{
        window.open(`https://www.facebook.com/messages/t/HonestyDotPk`,'_blank')
    }
    return (
        <div className="productsdetail">
            <div className="productdetail__block">
                <div className="productdetail__img">
                    <div className="productdetial__bigimg">
                        <img className="bigimg" src={img} alt="" />
                    </div>
                    <div className="productdetail__smallimg">
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.crdimg} alt="" />
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.img1} alt="" />
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.img2} alt="" />
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.img3} alt="" />
                    </div>

                </div>
                <div className="productdetail__content mx-3 mt-3">
                    <h2>{props.title}</h2>
                    <hr className="productdetail__titleline" />
                   
                    <p>{props.desc}</p>
                    <span className="font-weight-bold productdetail__title">Rs.{props.price}</span>
                    <del>Rs.{props.oldprice}</del>
                    <button className="btn btn-success mt-4" onClick={()=>msgme()}>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails
