import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="search by name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
