import products from "../products";
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
  return <div className="list"> {goodsList}</div>;
};

export default GoodsList;
