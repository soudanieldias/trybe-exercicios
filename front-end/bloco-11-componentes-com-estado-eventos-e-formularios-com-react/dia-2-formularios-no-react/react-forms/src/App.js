import './App.css';
import Form from './components/Form';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Form />
      </header>
    </div>
  );
}

export default App;
