import React from 'react'
import ProductCard from '../../pages/ProductCard/ProductCard'
import ProductList from '../../utils/Data.js'

function ProductCardAPI() {

    
   return (
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
      {ProductList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCardAPI