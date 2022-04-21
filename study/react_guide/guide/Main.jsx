import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Content1 from './Content1';
import Content2 from './Content2';

const Main = () => {
    return (
        <BrowserRouter>
            <div className="wrap">
                <div className="headerWrap">
                    <Header />
                </div>
                <div className="containerWrap">
                    <Routes>
                        <Route path="/Content1" element={<Content1 />} />
                        <Route path="/Content2" element={<Content2 />} />
                    </Routes>
                </div>
                <div className="footerWrap">
                    <footer>

                    </footer>
                </div>
            </div>
        </BrowserRouter>
    )
} 

export default Main;