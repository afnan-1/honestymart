import React from 'react';
import Card from './Card';
import './insidecard.css';
function InsideCard() {
    // if(window.location.path==='/mall/electronics'){

    // }
    return (
        <div className="insidecard">
            <div className="insidecard__heading mx-3">
                <h2>Electronics</h2>
                <p>Shop home entertaintment, TVs, home audio, headphones, cameras</p>
                <hr className="mt-4"/>
                <h3 style={{textAlign:'center'}}>SHOP BY CATEGORY</h3>
            </div>
            <div className="insidecard__flex mt-4">
            {/* <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" /> */}
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            </div>
            <div className="insidecard__flex mt-4">
            {/* <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" /> */}
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            </div> 
        </div>
    )
}
export default InsideCard
