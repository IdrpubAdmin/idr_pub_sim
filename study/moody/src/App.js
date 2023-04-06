import React, { useState } from 'react';
import './assets/scss/style.scss'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [inputValue, setInputValue] = useState('안녕');
  const test = () => {
    const testTxt = '하이?'
    setInputValue(testTxt)
  }
  return (
    <div className="wrapper">
      <Header />
      <main>
        <img src={require('./assets/images/image2.png')} alt="메인" />
      </main>
      {inputValue}
      <button onClick={test}></button>
      <Footer />
    </div> 
  );
}

export default App;
