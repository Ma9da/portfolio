import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Shop from './components/shop/Shop'
import Counter from './views/counter/Counter'
import ShopItem from './components/shopItem/ShopItem'
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Todo from './views/todo/Todo';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/Counter" component={Counter} />
            <Route component={Shop} path="/Shop" />
            <Route component={ShopItem} path="/ShopItem/:id" exact />
            <Route component={About} path="/about"/>
            <Route component={Todo} path="/todo"/>
            <Route component={Shop} path="/" exact />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
