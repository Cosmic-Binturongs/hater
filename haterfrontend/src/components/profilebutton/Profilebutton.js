import React from "react";
import "./Profilebutton.css";

function Probutton(props) {
  return <div className="probutton" onClick={props.click}></div>;
}

export default Probutton;
