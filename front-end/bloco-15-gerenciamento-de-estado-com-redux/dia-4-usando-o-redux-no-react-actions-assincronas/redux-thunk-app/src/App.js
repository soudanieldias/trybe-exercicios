import store from './store/';
import { Provider } from 'react-redux';
// import Header from './components/Header';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <Provider store={ store }>
      {/* <Header /> */}
      <ISSLocation />
    </Provider>
  );
}

export default App;
