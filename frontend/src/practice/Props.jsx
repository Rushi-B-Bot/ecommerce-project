import React from 'react'

function Props(props) {
  return (
    <>
     <div>
        <h2>Product Name:{props.name}</h2>
        <h2>Product price:{props.price}</h2>
        <h2>Product rating:{props.rating}</h2>
     </div>
 
    </>
  )
}

export default Props