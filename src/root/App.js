import './App.css';
import Home from '../components/containers/home/Home';
import About from '../components/containers/about/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Router>
      <header className="App-header">
      <h2>Keep Exploring !</h2>
      </header>
      <nav> <Link to="/">Home</Link> <Link to="/about">About</Link></nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
