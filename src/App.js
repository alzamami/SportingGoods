import { ThemeProvider } from "styled-components";
import "./App.css";
import GoodsList from "./components/GoodsList";
import { GolbalStyle, ShopImage, SubTitle, Title, ListWrapper } from "./styles";

const theme = {
  mainColor: "white",
  backgroundColor: "cyan",
  borderColor: "white",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GolbalStyle />
      <Title>Zamami Sports</Title>
      <SubTitle>All your needs in one place</SubTitle>
      <ShopImage
        src="https://www.nelsonworldwide.com/wp-content/uploads/2019/09/dicks-sporting-goods-06.jpg"
        alt="shop"
      />
      <GoodsList />
    </ThemeProvider>
  );
}

export default App;
