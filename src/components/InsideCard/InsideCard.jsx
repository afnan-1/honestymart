import React,{useState,useEffect} from 'react';
import Card from './Card';
import firebase from '../../firebase'

import './insidecard.css';
function InsideCard() {
    // if(window.location.path==='/mall/electronics'){
    document.title='Honesty Mall'
    // }
    const [products, setProducts] = useState([])
    useEffect(()=>{

        firebase.database().ref('/').on('value',snapshot=>{
            if(snapshot.val()!=null)
            for(const key in snapshot.val()){
                setProducts(snapshot.val()[key])
            }
        })
        
    },[])
    return (
        <div className="insidecard">
            <div className="insidecard__heading mx-3">
                <h2>Honesty Mall</h2>
                <p>Shop home entertaintment, TVs, home audio, headphones, cameras</p>
                <hr className="mt-4"/>
                <h3 style={{textAlign:'center'}}>SHOP BY CATEGORY</h3>
            </div>
            <div className="insidecard__flex mt-4">
            {
             Object.keys(products).map((v,i)=>{
            return <Card imageurl={products[v].img}
                cardtitle={products[v].title}
                price={products[v].price}
                oldprice={products[v].oldprice}
                id={i}
             />
             })}
            
            </div>
        </div>
    )
}
export default InsideCard
