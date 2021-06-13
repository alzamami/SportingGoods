import { ThemeProvider } from "styled-components";
import "./App.css";
import GoodsList from "./components/GoodsList";
import { GolbalStyle, ShopImage, SubTitle, Title, ThemeButton } from "./styles";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#1d3557",
    backgroundColor: "white",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#1d3557",
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
      <ThemeButton onClick={toggleTheme}>
        {webTheme === "light" ? "Light" : "Dark"} Theme
      </ThemeButton>
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
