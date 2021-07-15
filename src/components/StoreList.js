import { useState } from "react";
import authStore from "../stores/authStore";
import shopStore from "../stores/shopStore";
import { Title } from "../styles";
import SearchBar from "./SearchBar";
import StoreItem from "./StoreItem";
import { BsPlusSquareStyled } from "../styles";
import StoreModal from "./modals/StoreModal";
import { observer } from "mobx-react";

const StoreList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (shopStore.loading) return <p>loading</p>;
  const stores = shopStore.stores
    .filter((store) => store.name.toLowerCase().includes(query.toLowerCase()))
    .map((store) => <StoreItem store={store} />);
  return (
    <div className="container">
      <Title>Stores</Title>
      <SearchBar setQuery={setQuery} />

      {authStore.user && <BsPlusSquareStyled size="25px" onClick={openModal} />}

      <StoreModal isOpen={isOpen} closeModal={closeModal} />

      {stores}
    </div>
  );
};

export default observer(StoreList);
