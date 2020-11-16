import React from 'react'
import {useStateValue} from '../../StateProvider'
import Card from '../InsideCard/Card.jsx'

function Search() {
    const [{ products, prod }, dispatch] = useStateValue();
    return (
        <div className="insidecard">
            <div className="insidecard__flex mt-4">
           { Object.keys(products).map((v,i)=>{
             return <>{prod[i].toLowerCase().includes(products[v].title.toLowerCase()) && <Card imageurl={products[v].img}
             cardtitle={products[v].title}
             price={products[v].price}
             oldprice={products[v].oldprice}
             id={i}
          />
            }
            </>
          
            })
        }
        </div>
        </div>
    )
}

export default Search
