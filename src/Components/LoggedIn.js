import React from "react";
import { useLocation } from "react-router-dom";
const LoggedIn = () => {
  const location = useLocation();
  const status = location.state;
  return <h2>{status}</h2>;
};

export default LoggedIn;
