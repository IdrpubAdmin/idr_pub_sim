import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [inputValue, setInputValue] = useState('안녕');
  const test = () => {
    const testTxt = '하이?'
    setInputValue(testTxt)
  }
  return (
    <div className='container'>
        <main>
          <img src={require('../assets/images/image2.png')} alt="메인" />
        </main>
        {inputValue}
        <button onClick={test}>.</button>
    </div>
  );
}

export default Home;
