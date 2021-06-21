import { Link } from "react-router-dom";
import { SubTitle1, ProductWrapper, ImageSize } from "../styles";

import { DeleteButton } from "./buttons/DeleteButton";

const GoodsItems = (props) => {
  return (
    <ProductWrapper id={props.id}>
      <Link to={`/products/${props.product.slug}`}>
        <ImageSize alt={props.product.name} src={props.product.image} />
      </Link>

      <SubTitle1>{props.product.name}</SubTitle1>
      <SubTitle1>{props.product.price} KD</SubTitle1>
      <DeleteButton
        productDelete={props.productDelete}
        productId={props.product.id}
        setProduct={props.setProduct}
      />
    </ProductWrapper>
  );
};

export default GoodsItems;
