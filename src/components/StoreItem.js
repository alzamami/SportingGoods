import { StoreItemImage } from "../styles";

const StoreItem = ({ store }) => {
  return (
    <>
      <p>{store.name}</p>
      <StoreItemImage src={store.image} alt={store.name} />
    </>
  );
};

export default StoreItem;
