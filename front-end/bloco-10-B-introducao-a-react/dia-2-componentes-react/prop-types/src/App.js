import './App.css';
// import HeaderClass from "./Header";
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Teste Pokedex</h3>
        {/* <HeaderClass key="1" propTexto="Batatinha frita 123" propNumber="1, 2, 3, 4, 5, 6"/> */}
        {/* <HeaderClass /> */}
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
