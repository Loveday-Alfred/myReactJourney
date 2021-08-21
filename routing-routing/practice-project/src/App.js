import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QouteDetail from './pages/QouteDetail';
import NewQoute from './pages/NewQoute';

const App = () => {
  return (
    <Switch>
    <Route path='/qoutes' exact><AllQuotes /></Route>
    <Route path='/qoutes/:qouteId'><QouteDetail /></Route>
    <Route path='/new-qoute'><NewQoute /></Route>
    </Switch>
  );
}

export default App;