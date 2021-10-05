// import logo from './logo.svg';
import './App.css';
import HeaderClass from './Header';

function testeAlert() {
  alert("Teste");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={testeAlert}>Teste</button>
        <HeaderClass/>
      </header>
    </div>
  );
}

export default App;
