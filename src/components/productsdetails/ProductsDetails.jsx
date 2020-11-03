import React from 'react'
import './productdetails.css'
function ProductsDetails() {
    return (
        <div className="productsdetail">
            <div className="productdetail__block mt-5">
                <div className="productdetail__img">
                    <div className="productdetial__bigimg">
                        <img className="bigimg" src="https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp" alt="" />
                        </div>
                    <div className="productdetail__smallimg">
                        <img className="smallimg" src="https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp" alt="" />
                        <img className="smallimg" src="https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp" alt="" />
                        <img className="smallimg" src="https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp" alt="" />
                        <img className="smallimg" src="https://static-01.daraz.pk/p/4ddece16ae24bd775d1700c865b67282.jpg_200x200q80.jpg_.webp" alt="" />
                    </div>
                </div>
                <div className="productdetail__content mx-3">
                    <h2>Super bass sterio with jet black</h2>
                    <hr className="productdetail__titleline"/>
                    <span className="font-weight-bold productdetail__title">Rs.299</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore repellat distinctio delectus maiores illum temporibus, dolorem placeat possimus id commodi quas nulla ratione quasi culpa magni ad, iure recusandae!</p>
                    <del>Rs.500</del>
                    <button className="btn btn-success mt-4">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetails
