import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
       <Route path="/"><Welcome /></Route>
       <Route path="/products"><Products /></Route>
    </Router>
  );
}

export default App;