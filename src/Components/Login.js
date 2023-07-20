import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
const Login = () => {
  const nav = useNavigate();
  // const [loginStatus, setLogInStatus] = useState("");

  const [formLoginData, setLoginFormData] = useState({
    email: "",
    password: "",
    //data: [],
  });

  const handleOnChange = (e) => {
    setLoginFormData({ ...formLoginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = {
      email: formLoginData.email,
      password: formLoginData.password,
    };
    /*let arr = formdata.data;
    arr.push(tempObj);
    setformdata({ data: arr });*/
    axios
      .post("https://node-hs-4.onrender.com/user/login", tempObj)
      .then((res) => {
        console.log(res);
        //setLogInStatus(res.data);
        const status = res.data;
        if (status === "login Successfull") {
          nav("/", { state: status });
        } else {
          nav("/user/loggedin", { state: status });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      <form action="/loggedin" method="post">
        <h3>Login Account</h3>
        <label>Email:</label>
        <input
          type="email"
          placeholder="enter ur email"
          name="email"
          value={formLoginData.email}
          onChange={handleOnChange}
          className="input"
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="enter ur password"
          name="password"
          value={formLoginData.password}
          onChange={handleOnChange}
          className="input"
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit} className="btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
