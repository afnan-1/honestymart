import React, { useState } from 'react'
import './productdetails.css'

function ProductsDetails(props) {
    const [img, setimg] = useState(props.crdimg)
    // let imgurl = 'https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp'
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
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.smallimg[0]} alt="" />
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.smallimg[1]} alt="" />
                        <img className="smallimg" onClick={(e) => { handleImage(e) }} src={props.smallimg[2]} alt="" />
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
