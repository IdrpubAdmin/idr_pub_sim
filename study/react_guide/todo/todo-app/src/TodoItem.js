import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default TodoItem;