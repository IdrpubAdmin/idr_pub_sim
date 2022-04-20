import React from 'react';
// const ReactDOM = require('react-dom');
import ReactDOM from 'react-dom/client'; // 리액트 18버전에서 바뀜

import NumberBaseball from './NumberBaseball';

const rootNode = document.getElementById('root');

// ReactDOM.render(<WordRelay />, document.querySelector('#root')); 
ReactDOM.createRoot(rootNode).render(<NumberBaseball />); // 리액트 18버전에서 바뀜