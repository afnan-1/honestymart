import React from 'react';
import Card from './Card';
import crdimglenovo from '../../assests/lenovo/crdimg.jpg';
import crdimgairpods4 from '../../assests/airpodspro4/crdimg.jpg';
import crdimgairpods1 from '../../assests/airpods2/crdimg.jpg';
import crdimgairpods from '../../assests/airpodspro/crdimg.jpg';

import './insidecard.css';
function InsideCard() {
    // if(window.location.path==='/mall/electronics'){

    // }
    return (
        <div className="insidecard">
            <div className="insidecard__heading mx-3">
                <h2>Honesty Mall</h2>
                <p>Shop home entertaintment, TVs, home audio, headphones, cameras</p>
                <hr className="mt-4"/>
                <h3 style={{textAlign:'center'}}>SHOP BY CATEGORY</h3>
            </div>
            <div className="insidecard__flex mt-4">
            {/* <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" /> */}
            <Card imageurl={crdimgairpods1}
            cardtitle="Airpods Generation 2" 
            price="2700"
            oldprice="3000"
            id='1'
             />
            <Card 
            cardtitle="Air Pods Pro"
            price="3900"
            id='2'
            oldprice="4500"
            imageurl={crdimgairpods} />
            <Card 
            cardtitle="Air pod pro 4"
            price="2700"
            id="3"
            oldprice="3200"
            imageurl={crdimgairpods4} />
            <Card 
            cardtitle="Lenove LP 1"
            price="3300"
            id="4"
            oldprice="3500"
            imageurl={crdimglenovo} />
            </div>
            <div className="insidecard__flex mt-4">
            {/* <Card imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" /> */}
            <Card 
            cardtitle=""
            price=""
            oldprice=""
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            <Card 
            cardtitle=""
            price=""
            oldprice=""
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card 
            cardtitle=""
            price=""
            oldprice=""
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230BA9D9F69CEER3._V535729157_.jpg" />
            <Card 
            cardtitle=""
            price=""
            oldprice=""
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg" />
            </div> 
        </div>
    )
}
export default InsideCard
