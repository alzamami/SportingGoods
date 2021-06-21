import { ProductDetails } from "../styles";
import { DeleteButton } from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

const GoodsDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <ProductDetails>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price} KD</p>
      <p>{product.description}</p>
      <button
        onClick={() => {
          <Redirect to="/products" />;
        }}
      >
        Back
      </button>
      <DeleteButton
        productDelete={props.productDelete}
        productId={product.id}
      />
    </ProductDetails>
  );
};

export default GoodsDetail;
