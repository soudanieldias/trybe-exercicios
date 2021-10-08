import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Teste propTypes</h3>
        <Header key="1" propTexto="123456"/>
      </header>
    </div>
  );
}

export default App;
