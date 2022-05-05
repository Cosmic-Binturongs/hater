import React from "react";
import "./miniHates.css";

export default function MiniHates(props) {
  return (
    <div className="MinBox">
      <div className="miniHatesContainer">
        <div className="miniHateToptab"></div>
        <div className="searchHatePic">
          <img
            src={`https://avatars.dicebear.com/api/adventurer/${props.id}.svg?flip=1`}
          ></img>
        </div>
        <div className="miniHateID">@{props.id}</div>
        <div>Hate: {props.hate}</div>
        <div className="miniStats">Haters: {props.likes}</div>
      </div>
    </div>
  );
}
