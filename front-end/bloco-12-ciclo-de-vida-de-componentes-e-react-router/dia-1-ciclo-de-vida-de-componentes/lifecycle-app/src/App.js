import './App.css';
import Counter from './components/Counter';
import DadJoke from './components/DadJoke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DadJoke />
        <Counter />
      </header>
    </div>
  );
}

export default App;
