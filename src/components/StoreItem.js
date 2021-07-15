import { StoreItemImage } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const StoreItem = ({ store }) => {
  return (
    <>
      <p>{store.name}</p>
      <Link to={`/stores/${store.slug}`}>
        <StoreItemImage src={store.image} alt={store.name} />
      </Link>
    </>
  );
};

export default observer(StoreItem);
