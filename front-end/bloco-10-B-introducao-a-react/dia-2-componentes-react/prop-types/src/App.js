import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Teste propTypes</h3>
        <Header key="1" propTexto="Batatinha frita 123" propNumber="1, 2, 3, 4, 5, 6"/>
      </header>
    </div>
  );
}

export default App;
