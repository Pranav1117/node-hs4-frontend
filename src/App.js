//import { useState } from "react";
import "./App.css";
import Routes2 from "./Utilities/Routes/routes";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Routes2>
        <Register />
        <Login />
      </Routes2>
    </>
  );
}

export default App;
