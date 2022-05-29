import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Button } from '@mui/material';
import { markAllAsCompleted } from './util';
function App() {
  const [todos, setTodos] = useState([]);
  const markAll =()=>{
    markAllAsCompleted().then(data=>setTodos(data));

  };
  return (
    <div className="App">
      <AddTodo setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
      <Button onClick={markAll}>Mark all as completed, I need a beer</Button>
    </div>
  );
}

export default App;
