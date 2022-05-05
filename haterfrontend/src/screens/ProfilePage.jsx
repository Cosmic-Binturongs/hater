import React from "react";
import "../styles/ProfilePage.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import MiniHates from "../components/miniHates/miniHates.js"
import { createHate, getHate, getHates } from "../services/hates.js";

import logo from "../components/profilebutton/logo.png"

import Profile from "../components/profile";
import { Button } from "@mui/material";

export default function ProfilePage(props) {

  const [face, setFace] = useState("verybamboo")
  const PopSearchModal = () => {
    return 
  }
  const [datas, setDatas] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchHates = async () => {
      const response = await getHates()
      setDatas(response);
    }
    fetchHates()
    console.log(datas)
  }, [toggle])


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
            {datas.map((data) => (<MiniHates id={data.id} hate={data.h_body} likes={data.haters }/> ))}
          </div>
        </div>
      </div>
 </div>
  )
}
