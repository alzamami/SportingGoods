import { useParams } from "react-router";
import shopStore from "../stores/shopStore";

const StoreDetail = () => {
  const { storeSlug } = useParams();
  const store = shopStore.stores.find((store) => store.slug === storeSlug);
  console.log(store);
  return <div>{store?.name}</div>;
};

export default StoreDetail;
