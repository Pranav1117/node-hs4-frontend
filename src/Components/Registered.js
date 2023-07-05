import React from "react";
import { useLocation } from "react-router-dom";
const Registered = (props) => {
  const location = useLocation();
  console.log(location.state);
  const status = location.state;
  //const status = "";
  return (
    <div>
      <h2>{status}</h2>
    </div>
  );
};

export default Registered;
