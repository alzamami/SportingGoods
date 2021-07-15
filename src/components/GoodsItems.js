import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { SubTitle1, ProductWrapper, ImageSize } from "../styles";

import { DeleteButton } from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const GoodsItems = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <ImageSize alt={product.name} src={product.image} />
      </Link>

      <SubTitle1>{product.name}</SubTitle1>
      <SubTitle1>{product.price} KD</SubTitle1>
      {authStore.user && (
        <>
          <UpdateButton product={product} />
          <DeleteButton productId={product.id} />
        </>
      )}
    </ProductWrapper>
  );
};

export default observer(GoodsItems);
