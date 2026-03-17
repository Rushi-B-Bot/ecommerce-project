import React, { useEffect } from 'react'
import Products from '../utils/Data.js'
function UseEffectt() {


  return (
    <>
       <div>
        
            <h2>Product List</h2>
            {
              Products.map((item)=>(
                
                <div key={item.id}>
                    <h3>Product Name:{item.name}</h3>
                    <p>Price:{item.price}</p>
                </div>
                 
              ))}
       </div>
    </>
  );
}

export default UseEffectt
