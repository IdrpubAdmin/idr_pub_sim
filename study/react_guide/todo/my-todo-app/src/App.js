import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
            <button type="button" className="btn-close" aria-label="Close" onClick={() => handleDeleteTodo(index)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default App;