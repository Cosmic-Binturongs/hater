import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Profilebutton.css";

function Probutton(props) {
  return <div className="probutton" onClick={props.click}></div>;
}

export default Probutton;
