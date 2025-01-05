import age from './data'

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
} 

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

// server component : 장점-로딩속도 빠름, 검색엔진 노출 유리 / 단점-html에 자바스크립트 기능넣기 불가능, useState등 사용 불가능
// client component : 기존 React 컴포넌트
// 'use client' 를 붙임