import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {
  const [text, setText] = useState(''); // 이 페이지에서만 사용할 데이터 (input에쓴 텍스트 값)
  const todos = useSelector((state) => state.todos); // 스토어에서 todos 변수를 불러옴
  const dispatch = useDispatch();

  function handleAddTodo() { // Add 버튼을 클릭하면 실행
    if (text !== '') { // 텍스트가 빈 값이 아닐때
      const newTodo = { id: Date.now(), text }; // newTodo라는 변수를 만들고 그 안에 텍스트값과 id값 저장
      dispatch({ type: 'ADD_TODO', payload: newTodo }); // 스토어의 ADD_TODO 실행 인자값은 newTodo
      setText(''); // 후에 input값을 비움
    }
  }

  function handleRemoveTodo(id) { // 삭제 버튼
    dispatch({ type: 'REMOVE_TODO', payload: id }); // 스토어의 REMOVE_TODO 실행
  }

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;