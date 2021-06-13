import React from "react";

const GoodsDetail = (props) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <img src={props.product.image} />
      <p>{props.product.name}</p>
      <p>{props.product.price} KD</p>
    </div>
  );
};

export default GoodsDetail;
