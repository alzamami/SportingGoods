import { ThemeProvider } from "styled-components";
import "./App.css";
import GoodsList from "./components/GoodsList";
import { GolbalStyle, ShopImage, SubTitle, Title, ThemeButton } from "./styles";
import { useState } from "react";
import GoodsDetail from "./components/GoodsDetail";
import products from "./products";

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
  const [product, setProduct] = useState();

  const [_products, setProducts] = useState(products);

  const toggleTheme = () => {
    if (webTheme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const productDelete = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const setView = () => {
    return product ? (
      <GoodsDetail
        product={product}
        setProduct={setProduct}
        productDelete={productDelete}
      />
    ) : (
      <GoodsList
        setProduct={setProduct}
        products={_products}
        productDelete={productDelete}
      />
    );
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
      {setView()}
    </ThemeProvider>
  );
}

export default App;
