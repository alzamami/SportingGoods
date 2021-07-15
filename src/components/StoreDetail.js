import { useParams } from "react-router";
import productStore from "../stores/productStore";
import shopStore from "../stores/shopStore";
import { observer } from "mobx-react";
import GoodsList from "./GoodsList";

const StoreDetail = () => {
  const { storeSlug } = useParams();
  if (shopStore.loading) return <p> loading </p>;
  const store = shopStore.stores.find((store) => store.slug === storeSlug);
  const products = store.products.map((product) =>
    productStore.getProductById(product.id)
  );
  return (
    <>
      <h4>{store.name}</h4>
      <img src={store.image} alt={store.name} />

      <GoodsList products={products} store={store} />
    </>
  );
};

export default observer(StoreDetail);
