import React, { useState } from "react";
import {HashRouter, Route, Routes, Link } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    return (
    <HashRouter>
        <Routes>
            { isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} /> }        
        </Routes>
    </HashRouter>
    )
}

export default AppRouter;