import { SubTitle1, ProductWrapper, ImageSize } from "../styles";

const GoodsItems = (props) => {
  return (
    <ProductWrapper id={props.id}>
      <ImageSize alt={props.name} src={props.image} />
      <SubTitle1>{props.name}</SubTitle1>
      <SubTitle1>{props.price} KD</SubTitle1>
    </ProductWrapper>
  );
};

export default GoodsItems;
