import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <diV>
      <Header />
      <main>
      <Switch>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/products" exact><Products /></Route>
        <Route path="/products/:productId"><ProductDetails /></Route>
      </Switch>
      </main>
    </diV>
  );
}

export default App;