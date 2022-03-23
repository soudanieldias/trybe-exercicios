import logo from './logo.svg';
import './App.css';
import TasksClass from './Tasks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Lista de Tarefas:
        </h3>
        <TasksClass />
      </header>
    </div>
  );
}

export default App;
