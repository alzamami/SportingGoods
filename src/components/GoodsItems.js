import { SubTitle1, ProductWrapper, ImageSize } from "../styles";

const GoodsItems = (props) => {
  return (
    <ProductWrapper id={props.id}>
      <ImageSize
        alt={props.product.name}
        src={props.product.image}
        onClick={() => props.setProduct(props.product)}
      />
      <SubTitle1>{props.product.name}</SubTitle1>
      <SubTitle1>{props.product.price} KD</SubTitle1>
    </ProductWrapper>
  );
};

export default GoodsItems;
