import React from "react";
import { ProductDetails } from "../styles";
import { DeleteButton } from "./buttons/DeleteButton";

const GoodsDetail = (props) => {
  return (
    <ProductDetails>
      <h1>Product Detail</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.name}</p>
      <p>{props.product.price} KD</p>
      <p>{props.product.description}</p>
      <button onClick={() => props.setProduct(null)}>Back</button>
      <DeleteButton
        productDelete={props.productDelete}
        productId={props.product.id}
        setProduct={props.setProduct}
      />
    </ProductDetails>
  );
};

export default GoodsDetail;
