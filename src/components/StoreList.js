import { useState } from "react";
import shopStore from "../stores/shopStore";
import { Title } from "../styles";
import SearchBar from "./SearchBar";
import StoreItem from "./StoreItem";

const StoreList = () => {
  const [query, setQuery] = useState("");
  const stores = shopStore.stores
    .filter((store) => store.name.toLowerCase().includes(query.toLowerCase()))
    .map((store) => <StoreItem store={store} />);
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Stores</Title>
      {stores}
    </div>
  );
};

export default StoreList;
