import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../../Pages/Login";
import SignUp from '../../Pages/SignUp';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import ErrorPage from "../../Pages/ErrorPage/index";
import Footer from "../Footer"


function RouterIndex () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterIndex