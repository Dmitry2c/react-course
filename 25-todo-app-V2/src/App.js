import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id
          ? {...todo, isCompleted: !todo.isCompleted}
          : {...todo}
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? 
      <TodosActions 
      resetTodoHandler={resetTodoHandler}
      deleteCompletedTodoHandler={deleteCompletedTodoHandler}
      completedTodosCount={!!completedTodosCount}
      /> 
      :
      ''
    }
      <TodoList 
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
        />
        {completedTodosCount > 0 ? <h2>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? "todos" : "todo"}`}</h2> : ''}
    </div>
  );
}

export default App;