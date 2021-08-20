import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Header from './components/Header';

const App = () => {
  return (
    <diV>
      <Header />
      <main>
      <Router>
        <Route path="/"><Welcome /></Route>
        <Route path="/products"><Products /></Route>
      </Router>
      </main>
    </diV>
  );
}

export default App;