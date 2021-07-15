import { ThemeProvider } from "styled-components";
import "./App.css";

import { GolbalStyle } from "./styles";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

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
      <Routes />
    </ThemeProvider>
  );
}

export default App;
