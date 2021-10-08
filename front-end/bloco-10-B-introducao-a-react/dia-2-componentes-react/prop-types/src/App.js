import './App.css';
import HeaderClass from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Teste propTypes</h3>
        {/* <HeaderClass key="1" propTexto="Batatinha frita 123" propNumber="1, 2, 3, 4, 5, 6"/> */}
        <HeaderClass />
      </header>
    </div>
  );
}

export default App;
