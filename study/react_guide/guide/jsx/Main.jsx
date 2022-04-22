import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Install from './Install';
import Start from './Start';
import Grammar from './Grammar';
import Content3 from './Content3';

const Main = () => {
    const v = '기본구조'
    return (
        <BrowserRouter>
            <div className="wrap">
                <div className="headerWrap">
                    <Header />
                </div>
                <div className="containerWrap">
                    <Routes>
                        <Route path="/" element={<Install />} />
                        <Route path="/Install" element={<Install />} />
                        <Route path="/Start" element={<Start />} />
                        <Route path="/Grammar" element={<Grammar />} />
                        <Route path="/Content3" element={<Content3 />} />
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