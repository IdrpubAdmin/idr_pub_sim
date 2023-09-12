import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import styled from "styled-components";
import { Context1 } from './../App.js'
import { addItem } from './../store.js';
import { useDispatch } from 'react-redux';

let Btn = styled.button`
  background : ${ props => props.color };
  color : ${ props => props.color === 'blue' ? 'white' : 'black'};
  padding : 10px;
`
let NewBtn = styled(Btn)`
  border-color: tomato;
  font-weight : 700;
`

let Box = styled.div`
  background : grey;
  padding : 20px;
`

function Detail(props) {

  let { id } = useParams();
  let findShoes = props.shoes.find(x => x.id == id);
  let [alert, setAlert] = useState(true)
  let [tab, setTab] = useState(0)

  // html 렌더링후 동작할 코드 (nextTick 비슷)
  useEffect(() => {
    // 어려운 연산
    // 서버에서 데이터 가져오는 작업
    // 타이머
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    return () => {
      // useEffect 동작 전에 실행되는 코드
      // unMounted 될때 실행됨
      clearTimeout(a)
    }
  }, [])
  // []의 역할은 안에 변수를 적어넣었을때 그 변수의 값이 변경될때마다 useEffect함수를 실행한다는뜻
  // 아무것도 안적으면 mounted 될때만 실행

  let dispatch = useDispatch()

  return (
    <div className="container">
      {
        alert === true ?
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
      }
      <Box>
        <Btn color="blue">버튼</Btn>
        <Btn color="yellow">버튼</Btn>
        <NewBtn color="grey">버튼</NewBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findShoes.id+1}.jpg`} width="100%" alt='상품이미지' />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ findShoes.title }</h4>
          <p>{ findShoes.content }</p>
          <p>{ findShoes.price }</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: findShoes.id, name : findShoes.title, count : 1 }))
          }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={ props.shoes } tab={ tab } />
    </div> 
  )
}

// props 축약법 {}
function TabContent({tab, shoes}){
  // if(tab === 0){
  //   return <div>내용0</div>
  // }
  // if(tab === 1){
  //   return <div>내용1</div>
  // }
  // if(tab === 2){
  //   return <div>내용2</div>
  // }
  let [fade, setFade] = useState('')
  let { stock } = useContext(Context1)

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 100)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])
  return (
    <div className={`start ${fade}`}>
      {
        [<div>{ shoes[0].title }</div>, <div>{ shoes[1].title }</div>, <div>{ shoes[2].title }</div>][tab]
      }
      <p>{ stock }</p>
    </div>
  )
}

export default Detail;
