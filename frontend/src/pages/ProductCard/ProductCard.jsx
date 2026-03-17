import React, { useEffect } from "react";
import product from '../../utils/Data.js'
import "../../Style/ProductCard.css";

const ProductCard = ({ product }) => {
 

  return (
    <div className="product-card-wrapper">
      <div className="product-image-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info-box">
        <h3 className="product-title-text">{product.title}</h3>

        <p className="product-category-text">
          Category: {product.category}
        </p>

        <p className="product-price-text">
          ₹{product.price}
        </p>

        <button className="product-buy-btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;