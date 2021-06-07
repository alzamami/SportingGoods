import logo from "./logo.svg";
import "./App.css";
import products from "./products";

function App() {
  const productsList = products.map((product) => (
    <div className="productIMG" id={product.id}>
      <img alt={product.name} src={product.image} className="UEFABall" />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  ));
  return (
    <div>
      <h1 className="text">Zamami Sports</h1>
      <h3 className="text">All your needs in one place</h3>
      <img
        src="https://www.nelsonworldwide.com/wp-content/uploads/2019/09/dicks-sporting-goods-06.jpg"
        className="shope-image"
        alt="shop"
      />
      <div className="list">{productsList}</div>
    </div>
  );
}

export default App;
