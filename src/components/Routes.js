import GoodsList from "./GoodsList";
import GoodsDetail from "./GoodsDetail";
import { Route, Switch } from "react-router";
import StoreList from "./StoreList";
import StoreDetail from "./StoreDetail";
import { ShopImage, SubTitle, Title } from "../styles";
import productStore from "../stores/productStore";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/products/:productSlug"}>
        <GoodsDetail />
      </Route>
      <Route path="/products">
        <GoodsList products={productStore.products} />
      </Route>
      <Route path={"/stores/:storeSlug"}>
        <StoreDetail />
      </Route>
      <Route path="/stores">
        <StoreList />
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
  );
};

export default Routes;
