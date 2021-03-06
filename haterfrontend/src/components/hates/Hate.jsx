import React, { useState, useEffect, useRef } from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import MessageIcon from "@mui/icons-material/Message";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { updateHate } from "../../services/hates";
import Criticisms from "../criticisms/Criticisms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Hate({ hateData, setToggle }) {
  let hateButtons = useRef(null);
  let rehateButtons = useRef(null);
  let navigate = useNavigate();
  const [hate, setHate] = useState({
    hate: hateData.hate,
    hater_name: hateData.hater_name,
    hate_tag: hateData.hate_tag,
    hate_count: hateData.hate_count,
    crit_count: hateData.crit_count,
    rehate_count: hateData.rehate_count,
    date_time: hateData.date_time,
  });

  let splitTime = hate.date_time.split("T");
  let splitTimeDate = splitTime[0].slice(5, 10);
  let splitTime2 = splitTime[1].slice(0, 5);
  let halfTime = splitTime2.split(":");
  let hours = ((halfTime[0] + 11) % 12) + 6;
  let ampm = hours >= 12 ? "PM" : "AM";

  let combinedTime = hours + ":" + halfTime[1] + ampm;
  const [hateCount, setHateCount] = useState(0);
  const [rehateCount, setRehateCount] = useState(0);
  const [hatedisabled, setHateDisabled] = useState(false);
  const [rehatedisabled, setReHateDisabled] = useState(false);

  const incrementHateCount = async (event) => {
    setHateCount((prev) => prev + 1);
    event.preventDefault();
    let hateUpdated = await axios.get(
      `http://127.0.0.1:8000/addDislike?hateid=${hateData.id}&sign=${1}`
    );
    hateButtons.current.classList.add("hate-disabled");
    hateButtons.current.style.color = "red";
  };

  const incrementRehateCount = async (event) => {
    setRehateCount((prev) => prev + 1);
    event.preventDefault();
    let rehateUpdated = await axios.get(
      `http://127.0.0.1:8000/addRehate?hateid=${hateData.id}&sign=${1}`
    );
    rehateButtons.current.classList.add("rehate-disabled");
    rehateButtons.current.style.color = "green";
  };
  let toComments = () => {
    navigate(`/commentSection/${hateData.id}`);
  };
  return (
    <div className="hate-post">
      <div className="hate-profile">
        <div className="hate-profile-pic">
          <img
            src={`https://avatars.dicebear.com/api/adventurer/${hate.hater_name}.svg?flip=1`}
            alt="profile"
          ></img>
        </div>
      </div>
      <div className="hate-form">
        <h3 className="hate-name" type="text" name="name">
          {hate.hater_name}@{hate.hate_tag}
        </h3>
        <div className="hate-info">
          <h2 className="hate-text" type="text" name="text">
            {hate.hate}
          </h2>
          <h3 className="hate-date" type="date" name="text">
            {splitTimeDate} - {<p className="hate-date-time">{combinedTime}</p>}
          </h3>
        </div>
        <div className="hate-buttons">
          <button
            className="hate-criticisms"
            onClick={toComments}
            title="Criticism"
          >
            <MessageIcon className="hate-crit" id="makeDark"></MessageIcon>{" "}
            {hate.crit_count}
          </button>
          <button
            ref={rehateButtons}
            className="hate-rehate"
            title="Rehate"
            onClick={incrementRehateCount}
          >
            <AutorenewIcon className="hate-renew" id="makeDark"></AutorenewIcon>{" "}
            {hate.rehate_count + rehateCount}
          </button>
          <button
            ref={hateButtons}
            className="hate-dislike"
            title="Dislike"
            onClick={incrementHateCount}
          >
            <HeartBrokenIcon
              className="hate-broken"
              id="makeDark"
            ></HeartBrokenIcon>{" "}
            {hate.hate_count + hateCount}
          </button>
        </div>
      </div>
    </div>
  );
}
