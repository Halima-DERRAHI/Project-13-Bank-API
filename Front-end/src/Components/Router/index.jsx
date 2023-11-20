import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../../Pages/Login";
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import ErrorPage from "../../Pages/ErrorPage/index";
import NavBar from "../../Components/NavBar"
import Footer from "../Footer"


function RouterIndex () {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterIndex