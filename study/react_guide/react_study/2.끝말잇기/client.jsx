// 쪼개진 컴포넌트들을 불러오는 jsx

// npm에 설치했던것을 불러옴
const React = require('react');
const ReactDOM = require('react-dom');

// 컴포넌트를 불러옴 ('./경로')
const WordRelay = require('./WordRelay')

ReactDOM.render(<WordRelay />, document.querySelector('#root')); 