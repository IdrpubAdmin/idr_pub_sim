import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/2" element={`hi`} />
          </Routes> 
        <Footer />
      </BrowserRouter>
    </div> 
  );
}

export default App;
