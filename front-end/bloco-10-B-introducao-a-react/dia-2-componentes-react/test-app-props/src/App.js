import Greeting from './Greeting';

function App() {
  const arrayProps = ['a', 'b', 'c', 'd', 'e'];
  return (
    <main>
      <Greeting name="Daniel" lastName="Dias" array={arrayProps}/>
    </main>
  );
}

export default App;