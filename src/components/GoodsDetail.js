import { ProductDetails } from "../styles";
import { DeleteButton } from "./buttons/DeleteButton";
import { Link, Redirect, useParams } from "react-router-dom";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";

const GoodsDetail = () => {
  const productSlug = useParams().productSlug;
  if (productStore.loading) return <p> loading </p>;

  const product = productStore.products.find(
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
      <Link to="/products">
        <button>Back</button>
      </Link>

      <DeleteButton productId={product.id} />
    </ProductDetails>
  );
};

export default observer(GoodsDetail);
