import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <diV>
      <Header />
      <main>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/products"><Products /></Route>
        <Route path="/product-detail/:productId"><ProductDetails /></Route>
      </main>
    </diV>
  );
}

export default App;