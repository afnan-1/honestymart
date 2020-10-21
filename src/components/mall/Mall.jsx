import React from 'react'
import './mall.css'
import MallCard from './MallCard.jsx'
function Mall() {
    return (
        <div className="mall my-4 container">
                <MallCard />
                <MallCard />
                <MallCard />
        </div>
    )
}

export default Mall
