import { useState } from "react";
// products data
import products from "../products";
//styling for the items
import { ListWrapper } from "../styles";

import GoodsItems from "./GoodsItems";
//Search bar
import SearchBar from "./SearchBar";

const GoodsList = (props) => {
  const [query, setQuery] = useState("");
  const goodsList = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().includes(query)
    )
    .map((product) => (
      <GoodsItems
        product={product}
        setProduct={props.setProduct}
        key={product.id}
      />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{goodsList}</ListWrapper>
    </div>
  );
};

export default GoodsList;
