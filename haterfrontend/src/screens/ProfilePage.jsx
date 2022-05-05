import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import "../styles/Landing.css";
import Profile from "../components/profile";
import Profiletab from "../components/profiletab/Profiletab.js"
export default function ProfilePage() {

  return (
    <div className="fullDiv">

    <Profiletab></Profiletab>
    <div className="mid">
      <Profile />
    </div>
    <div className="right">3</div>
  </div>
  )
}
