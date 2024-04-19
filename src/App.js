import "./App.css";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Movies from "./components/Movies/Movies";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./authen/Login/Login";
import Register from "./authen/Register/Register";
import Profile from "./authen/Profile/Profile";
import Favorites from "./authen/Favorites/Favorites";
import ChangePass from "./authen/ChangePassword/ChangePass";

function App() {
  return (
    <div className="container">
      <Router id="router">
        <Routes id="routes">
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/pass" element={<ChangePass />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;