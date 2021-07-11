import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="search by name"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
