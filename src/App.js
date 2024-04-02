import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
          <h1> To do List </h1>
      </header>
      
      <TodoList />
    </div>
  );
}

export default App;
