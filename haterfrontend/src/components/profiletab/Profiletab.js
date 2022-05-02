import "./Profiletab.css";
import React from "react";
import { useState, useEffect } from "react";

function Profile(props) {
  return (
    <div className="profile" style={props.show}>
      <div className="top">
        <div className="exit" onClick={props.click}>
          x
        </div>
        <div className="propic"> </div>
        <div className="tweetcount">
          <div className="account">{props.name}</div>
          {props.tweets} Following {props.likes} Followers
        </div>
      </div>
      <div className="bottom">
        <div className="navs">Home</div>
        <div className="navs">Profile</div>
        <div className="navs">Bookmarks</div>
        <div className="hate">Hate</div>
      </div>
    </div>
  );
}

export default Profile;
