import logo from './logo.svg';
import './App.css';

/** Para fixar, crie um elemento JSX que recebe o valor
 * "Hello, JSX" de uma constante chamada textJSX,
 * e o incorpore em uma tag h1.
*/

const textJSX = 'Hello, JSX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        React.appendChild(elementJSX);
        <p>
          Testando Código React
        </p>
        <p> 123 </p>
        <h1>{textJSX}</h1>
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
