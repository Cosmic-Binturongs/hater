import React from "react";
import "../styles/ProfilePage.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

import logo from "../components/profilebutton/logo.png"

import Profile from "../components/profile";
import { Button } from "@mui/material";

export default function ProfilePage(props) {

  const [face, setFace] = useState("verybamboo")
  const PopSearchModal = () => {
    return 
  }


  return (
    <div className="proPageContainer">
      <div className="contentContainer">
        <div className="frame"></div>
        <div className="proPageContent">
          <div className="proPageLinks">
            <div className="proLogo"></div>
            <Link to="/home" className="proHome"></Link>
            <div className="proSearchButton" onClick={PopSearchModal}></div>
            <Link to="/"className="proRoot"></Link>
          </div>
          <div className="proBody">
            <div className="proBodyFrame"></div>
            <div className="proProfilePic"><img src={`https://avatars.dicebear.com/api/adventurer/${face}.svg?flip=1`}></img></div>
            <div className="proTweetCount">
              <div>Hates:{ }</div>
              <div>Haters:{ }</div>
              <div>Critiques:{ }</div>
            </div>
          </div>
          <div className="proSearch">
          <form className="landingForm">

<<<<<<< HEAD
    <Profiletab></Profiletab>
    <div className="mid">
      <Profile />
    </div>
      <div className="right">
    </div>
  </div>
=======
          <input
            className="landingLoginInput"
            placeholder="Hates/Hater"
            type="text"
            name="name"
          />
          <Button id="login" type="submit" variant="outlined">
            Search
          </Button>
        </form>
          </div>
        </div>
      </div>
 </div>
>>>>>>> main
  )
}
