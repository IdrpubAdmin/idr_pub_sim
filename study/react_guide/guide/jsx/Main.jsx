import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Install from './Install';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const Main = () => {
    return (
        <HashRouter>
            <div className="wrap">
                <div className="headerWrap">
                    <Header />
                </div>
                <div className="containerWrap">
                    <Routes>
                        <Route path="/" element={<Install />} />
                        <Route path="/Content1" element={<Content1 />} />
                        <Route path="/Content2" element={<Content2 />} />
                        <Route path="/Content3" element={<Content3 />} />
                    </Routes>
                </div>
                <div className="footerWrap">
                    <footer>

                    </footer>
                </div>
            </div>
        </HashRouter>
    )
} 

export default Main;