import './App.css';
import { createContext, useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import bg from './bg.png'
import productData from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'
import axios from 'axios';

// context API
export let Context1 = createContext()

function App() {
  let [shoes, setShoes] = useState(productData)
  let [stock, setStock] = useState([10, 11, 12])
  // useNavigate() - 페이지 이동함수: 인수에 1적으면 앞으로가기 -1적으면 뒤로가기
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* 기본방법 */}
            {/* <Link to='/'>Home</Link> */}
            {/* <Link to='/detail'>Detail</Link> */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: `url(${bg})` }}></div>
            <Container>
              <Row>
                {
                  shoes.map((v, i) => {
                    return (
                      <Card shoes={ v } i = { i + 1 } key={ i }></Card>
                    )
                  })
                }
              </Row>
            </Container>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                console.log(result.data)
                let copy = [...shoes, ...result.data];
                setShoes(copy)
              })
              .catch(() => {
                console.log('요청 실패')
              })
            }}>더보기</button>
          </>
        }></Route>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ stock }}>
            <Detail shoes={ shoes } />
          </Context1.Provider>
        }></Route>
        <Route path='/about' element={<About />}>
          {/* nested routes: 페이지안에 페이지를 쓸때 사용 */}
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>로케이션임</div>} />
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        {/* path='*'은 선언한 라우트 외 모든페이지를 뜻함 ex)404 페이지 */}
        <Route path='*' element={<div>없는페이지에요</div>}></Route>
      </Routes>

      {/* 퍼블릭폴더 안에있는 img 가져다 쓰는 방법 */}
      {/* <img src={ process.env.PUBLIC_URL + '/logo192.png' } alt='이미지' /> */}
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={ `https://codingapple1.github.io/shop/shoes${props.i}.jpg` } alt='상품이미지' width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price }</p>
    </Col>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
