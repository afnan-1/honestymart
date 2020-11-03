import React from 'react'
import './mall.css'
import MallCard from './MallCard.jsx'
function Mall() {
    return (
        <div className="mall my-4 container-fluid">
                <MallCard imgUrl="https://laz-img-cdn.alicdn.com/images/ims-web/TB1hOvl0lr0gK0jSZFnXXbRRXXa.jpg" />
                <MallCard imgUrl="https://laz-img-cdn.alicdn.com/images/ims-web/TB1WzPl0lr0gK0jSZFnXXbRRXXa.jpg" />
                <MallCard imgUrl="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l76l0lr0gK0jSZFnXXbRRXXa.jpg" />
                <MallCard imgUrl="https://laz-img-cdn.alicdn.com/images/ims-web/TB1l76l0lr0gK0jSZFnXXbRRXXa.jpg" />
        </div>
    )
}

export default Mall
