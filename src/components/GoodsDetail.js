import React from "react";
import { ProductDetails } from "../styles";

const GoodsDetail = (props) => {
  return (
    <ProductDetails>
      <h1>Product Detail</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <p>{props.product.price} KD</p>
    </ProductDetails>
  );
};

export default GoodsDetail;
