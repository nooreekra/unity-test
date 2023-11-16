import "./App.css";
import Advantages from "./components/advantages/Advantages";
import ProductInfo from "./components/info/ProductInfo";
import Media from "./components/media/Media";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
        <Media />
        <ProductInfo />
        <Advantages />
        <Payment />
    </div>
  );
}

export default App;
