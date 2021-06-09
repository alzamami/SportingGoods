import products from "../products";
import { ListWrapper } from "../styles";
import GoodsItems from "./GoodsItems";

const GoodsList = () => {
  const goodsList = products.map((product) => (
    <GoodsItems
      name={product.name}
      price={product.price}
      image={product.image}
      key={product.id}
    />
  ));
  return <ListWrapper> {goodsList}</ListWrapper>;
};

export default GoodsList;
