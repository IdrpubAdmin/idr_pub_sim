import React, { useState } from 'react';
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
      {inputValue}
      <button onClick={test}></button>
      <Footer />
    </div> 
  );
}

export default App;
