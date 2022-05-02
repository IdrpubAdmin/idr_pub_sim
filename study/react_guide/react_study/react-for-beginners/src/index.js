import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './ToDoList';
import CoinTracker from './CoinTracker';
import MovieApp from './MovieApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <ToDoList />
      <CoinTracker />
      <MovieApp />
    </>
  </React.StrictMode>
);