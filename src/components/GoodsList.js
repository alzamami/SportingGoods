import { useState } from "react";
//styling for the items
import { ListWrapper, BsPlusSquareStyled } from "../styles";

import GoodsItems from "./GoodsItems";
//Search bar
import SearchBar from "./SearchBar";

import productStore from "../stores/productStore";

import { observer } from "mobx-react";
import ProductModal from "./modals/ProductModal";

const GoodsList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const goodsList = productStore.products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().includes(query)
    )
    .map((product) => <GoodsItems product={product} key={product.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <BsPlusSquareStyled size="25px" onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
      <ListWrapper>{goodsList}</ListWrapper>
    </div>
  );
};

export default observer(GoodsList);
