import React from 'react'
import './imageSlider.css'

function ImageSlider() {
    return (
        <div>
     <div id="carouselExampleControls" className="carousel slide amazonslider" data-ride="carousel" data-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active" data-intervel="3000">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" className="slider__img" alt="..." />
          </div>
          <div className="carousel-item" data-intervel="3000">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg" className="slider__img" alt="..." />
          </div>
          <div className="carousel-item" data-intervel="3000">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" className="slider__img" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
        </div>
    )
}

export default ImageSlider
