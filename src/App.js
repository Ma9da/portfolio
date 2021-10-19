import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Shop from './components/shop/Shop'
import Counter from './components/counter/Counter'
import ShopItem from './components/shopItem/ShopItem'
function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/Counter" component={Counter} />
          <Route component={Shop}  path="/Shop" />
          <Route component={ShopItem} path="/ShopItem/:id" exact/>
          <Route  component={Shop} path="/"  exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
