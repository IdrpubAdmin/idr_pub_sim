import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { countPlus } from './../store.js';

function Cart() {
  // Redux store 가져와줌
  let cart = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((v, i)=> {
              return (
                <tr key={ v.id }>
                  <td>{ cart[i].id }</td>
                  <td>{ cart[i].name }</td>
                  <td>{ cart[i].count }</td>
                  <td><button onClick={() => {
                    dispatch(countPlus(cart[i].id))
                  }}>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;