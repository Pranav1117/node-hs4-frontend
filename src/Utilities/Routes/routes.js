import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registered from "../../Components/Registered";
import Login from "../../Components/Login";
import Home from "../../Components/Home";
import LoggedIn from "../../Components/LoggedIn";
import Register from "../../Components/Register";
const Routes2 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/registered" element={<Registered />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/LoggedIn" element={<LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routes2;
