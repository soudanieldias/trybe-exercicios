// import logo from './logo.svg';
import './App.css';
import HeaderClass from './Header';
import ContentClass from './Content';
import FooterClass from './Footer';

// function testeAlert() {
//   alert("Teste");
// }

function App() {
  return (
    <div className="App">
      {/* <button type="button" onClick={testeAlert}>Teste</button> */}
      <header className="App-header">
        <HeaderClass/>
      </header>
      <main className="App-main">
      <ContentClass/>
      </main>
      <footer className="App-footer">
        <FooterClass/>
      </footer>
      
    </div>
  );
}

export default App;
