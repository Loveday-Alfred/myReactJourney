import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';

const App = () => {
  return (
    <diV>
      <Header />
      <main>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/products"><Products /></Route>
      </main>
    </diV>
  );
}

export default App;