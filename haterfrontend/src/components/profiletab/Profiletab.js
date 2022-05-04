import "./Profiletab.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile(props) {
  const [content, setcontent] = useState(<img src={props.picture}></img>);
  return (
    <div className="profile" style={props.show}>
      <div className="top">
        <div className="exit" onClick={props.click}>
          x
        </div>
        <div className="propic">{content}</div>
        <div className="tweetcount">
          <div className="account">{props.name}</div>
          <div className="proCountContainer">
            <div>{props.tweets} Following</div>
            <div>{props.likes} Followers</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Link to="/" className="pronavs">
          Home
        </Link>
        <Link to="" className="pronavs">
          Profile
        </Link>
        <Link to="" className="pronavs">
          Bookmarks
        </Link>
        <Link to="" className="prohate">
          Hate
        </Link>
      </div>
    </div>
  );
}

export default Profile;
