import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  let [postName, setPostName] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [modalState, setModalState] = useState(false);
  let [postNameIndex, setPostNameIndex] = useState(0);
  let [updataPostName, setUpdataPostName] = useState('');

  function lickCountPlus(e, i) {
    e.stopPropagation() // 이벤트 버블링 막기
    let copy = [...likeCount];
    copy[i] = copy[i] + 1;
    setLikeCount(copy);
  }
  function sortBtn() {
    let copy = [...postName];
    copy.sort();
    setPostName(copy);
  }
  function postChange() {
    let copy = [...postName];
    copy[0] = '여자코트 추천';
    setPostName(copy);
  }
  function modalChange(i) {
    setPostNameIndex(i)
    setModalState(!modalState);
  }
  function updataPost() {
    if(updataPostName.length > 0){
      let copy = [...postName];
      copy.unshift(updataPostName);
      setPostName(copy);
      setUpdataPostName('');
    }
  }
  function deletePost(i) {
    let copy = [...postName];
    copy.splice(i, 1);
    setPostName(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => sortBtn()}>정렬버튼</button>
      <button onClick={() => postChange()}>글수정</button> 

      {
        postName.map((v, i) => {
          return (
            <div className="list" onClick={() => modalChange(i)} key={ i }>
              <h4>{ postName[i] } <span onClick={(e) => lickCountPlus(e, i)}>👍</span> { likeCount[i] } </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => deletePost(i)}>글삭제</button>
            </div>
          )
        })
      }

      <input type='text' onChange={(e) => setUpdataPostName(e.target.value)}></input>
      <button onClick={() => updataPost()}>글발행</button>

      {
        modalState === true ? <Modal postNameIndex={ postNameIndex } postChange={ postChange } postName={ postName } /> : null
      }
      <Modal2 postNameIndex={ postNameIndex } postName={ postName } />
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{ props.postName[props.postNameIndex] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{ props.postChange() }}>글수정</button>
    </div>
  )
}

// 옛날 문법
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Kim',
      age: 20
    }
  }
  render(){
    return (
      <div className='modal'>
        <h4>{ this.props.postName[this.props.postNameIndex] }</h4>
        <p>안녕 { this.state.name }</p>
        <button onClick={() => {this.setState({ name: 'Sim' })}}>버튼</button>
      </div>
    )
  }
}

export default App;
