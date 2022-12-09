import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline caret-violet-400">
          Hello world!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm test project!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
