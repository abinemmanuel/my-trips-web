import './App.css';
import Home from '../components/containers/home/Home';
import About from '../components/containers/about/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Keep Exploring !</h2>
      </header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
