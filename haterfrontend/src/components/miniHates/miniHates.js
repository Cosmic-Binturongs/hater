import React from "react";
import { Link } from "react-router-dom";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import MessageIcon from "@mui/icons-material/Message";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import "./miniHates.css";

export default function MiniHates(props) {
  return (
    <div className="MinBox">
      <div className="miniHatesContainer">
        <div className="miniHateToptab"></div>
        <div className="searchHatePic">
          <img
            src={`https://avatars.dicebear.com/api/adventurer/${props.hater_name}.svg?flip=1`}
          ></img>
        </div>
        <div className="miniHateID">
          {
            <Link className="nameLinks" to={`/profile/${props.hate_tag}`}>
              @{props.hate_tag}
            </Link>
          }
        </div>
        <div className="miniHateBody">{props.hate}</div>
        <div className="miniStats">
          <MessageIcon className="miniIcon"></MessageIcon>
          {props.crit_count}
          <AutorenewIcon className="miniIcon"></AutorenewIcon>
          {props.rehate_count}
          <HeartBrokenIcon className="miniIcon"></HeartBrokenIcon>
          {props.hate_count}
        </div>
      </div>
    </div>
  );
}
