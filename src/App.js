import { ThemeProvider } from "styled-components";
import "./App.css";
import GoodsList from "./components/GoodsList";
import GoodsDetail from "./components/GoodsDetail";
import { GolbalStyle, ShopImage, SubTitle, Title } from "./styles";
import { useState } from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
const theme = {
  light: {
    mainColor: "#1d3557",
    backgroundColor: "white",
    buttonColor: "red",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#1d3557",
    buttonColor: "red",
  },
};

function App() {
  const [webTheme, changeTheme] = useState("light");

  const toggleTheme = () => {
    if (webTheme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme[webTheme]}>
      <GolbalStyle />
      <NavBar webTheme={webTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path={"/products/:productSlug"}>
          <GoodsDetail />
        </Route>
        <Route path="/products">
          <GoodsList />
        </Route>
        <Route exact path="/">
          <Title>Zamami Sports</Title>
          <SubTitle>All your needs in one place</SubTitle>
          <ShopImage
            src="https://www.nelsonworldwide.com/wp-content/uploads/2019/09/dicks-sporting-goods-06.jpg"
            alt="shop"
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
