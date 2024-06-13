import logo from './cokctail.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Input ingredients and we'll tell you what drinks you can make!
        </p>

      </header>
    </div>
  );
}

export default App;
