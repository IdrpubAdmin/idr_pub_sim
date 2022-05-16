import React, { useState } from "react";
import {HashRouter, Route, Routes, Link } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
    <HashRouter>
        {isLoggedIn && <Navigation />}
        <div style={{ maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center", }}>
            <Routes>
                { isLoggedIn ? 
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile userObj={userObj} />} />
                    </> 
                    : 
                    <>
                        <Route path="/" element={<Auth />} /> 
                    </>
                }        
            </Routes>
        </div>
    </HashRouter>
    )
}

export default AppRouter; 