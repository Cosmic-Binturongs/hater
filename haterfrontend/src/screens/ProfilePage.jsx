import React from "react";
import "../styles/ProfilePage.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import MiniHates from "../components/miniHates/miniHates.js"
import { createHate, getHate, getHates, getAllHates } from "../services/hates.js";
import logo from "../components/profilebutton/logo.png"
import Profile from "../components/profile";
import { Button } from "@mui/material";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import MessageIcon from '@mui/icons-material/Message';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function ProfilePage(props) {

  const [face, setFace] = useState("verybamboo")
  const PopSearchModal = () => {
    return 
  }
  const [datas, setDatas] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchHates = async () => {
      const response = await getAllHates()
      setDatas(response);
    }
    fetchHates()
    console.log(datas)
  }, [toggle])


  const filterTag = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setType({ search });
  };
  


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
                      <MessageIcon className='hate-crit'></MessageIcon>   
                      <AutorenewIcon className='hate-renew'></AutorenewIcon> 
                      <HeartBrokenIcon className='hate-broken'></HeartBrokenIcon> 
            </div>
          </div>
          <div className="proSearch">
          <form className="landingForm">
            <input
                className="landingLoginInput"
                placeholder="tag"
                type="text"
                name="name"
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
            />
            {/* <Button id="login" type="submit" onClick={filterTag}>
              Search
            </Button> */}
            </form>
            {datas.map((data) => data.hate_tag.toUpperCase().includes(search.toUpperCase()) && (<MiniHates profileID={data.hater_id } hater_name={data.hater_name} hater_tag={data.hate_tag} hate={data.hate} hate_count={data.hate_count }  rehate_count={data.rehate_count} crit_count={data.crit_count}/>))}
          </div>
        </div>
      </div>
 </div>
  )
}
