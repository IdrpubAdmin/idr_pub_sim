import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Add todo item"
          value={inputValue}
          onChange={inputChange}
        />
        <button type="button" onClick={addTodo}>생성</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" aria-label="Close" onClick={() => deleteTodo(index)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default App;