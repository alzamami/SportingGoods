import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { SubTitle1, ProductWrapper, ImageSize } from "../styles";

import { DeleteButton } from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const GoodsItems = (props) => {
  return (
    <ProductWrapper id={props.id}>
      <Link to={`/products/${props.product.slug}`}>
        <ImageSize alt={props.product.name} src={props.product.image} />
      </Link>

      <SubTitle1>{props.product.name}</SubTitle1>
      <SubTitle1>{props.product.price} KD</SubTitle1>
      <UpdateButton product={props.product} />
      <DeleteButton productId={props.product.id} />
    </ProductWrapper>
  );
};

export default observer(GoodsItems);
