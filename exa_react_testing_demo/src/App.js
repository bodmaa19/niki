import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter/Counter";
import NameChecker from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React</h1>
          <Counter />
          <NameChecker />
      </header>
    </div>
  );
}

export default App;
