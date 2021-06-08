import "./App.css";
import GoodsList from "./components/GoodsList";

function App() {
  return (
    <div>
      <h1 className="text">Zamami Sports</h1>
      <h3 className="text">All your needs in one place</h3>
      <img
        src="https://www.nelsonworldwide.com/wp-content/uploads/2019/09/dicks-sporting-goods-06.jpg"
        className="shope-image"
        alt="shop"
      />
      <div className="list">
        <GoodsList />
      </div>
    </div>
  );
}

export default App;
