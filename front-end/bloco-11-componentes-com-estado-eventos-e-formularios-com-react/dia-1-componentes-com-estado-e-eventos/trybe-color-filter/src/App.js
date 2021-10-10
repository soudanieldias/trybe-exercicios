import logo from './logo.svg';
import './App.css';
import colors from './colors';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <input type="text" />
      <ul>
        { colors.map( color =>
        <li key={color.hex}>
          <div style={{backgroundColor: color.hex }} className="display-color"></div>
          { color.name }
        </li>
        ) }
      </ul>
    </div>
  );
}

export default App;
