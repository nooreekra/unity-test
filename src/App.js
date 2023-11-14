import './App.css';
import Advantages from './components/advantages/Advantages';
import Description from './components/info/ProductInfo';
import Media from './components/media/Media';
import Payment from './components/payment/Payment';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Media />
      <Description />
      <Advantages />
      <Payment />
    </div>
  );
}

export default App;
