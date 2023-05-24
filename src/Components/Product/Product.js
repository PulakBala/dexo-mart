import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : ${price}</p>
        <p>
          <small>Seller :{seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text text-white mt-3 me-3">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
