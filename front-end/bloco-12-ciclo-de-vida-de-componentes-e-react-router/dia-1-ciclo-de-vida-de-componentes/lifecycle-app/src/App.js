import './App.css';
import RickAndMorty from './components/RickAndMorty';
import SongPlayer from './components/SongPlayer';
// import Counter from './components/Counter';
// import DadJoke from './components/DadJoke';

function App() {
  return (
    <div className="App">
      <SongPlayer />
      <RickAndMorty />
      {/* <DadJoke /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
