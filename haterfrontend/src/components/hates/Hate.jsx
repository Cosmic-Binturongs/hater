import React, { useState, useEffect, useRef } from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import MessageIcon from "@mui/icons-material/Message";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { updateHate } from "../../services/hates";
import Criticisms from "../criticisms/Criticisms";
import axios from "axios";

export default function Hate({ hateData, setToggle }) {
  let hateButtons = useRef(null);
  let rehateButtons = useRef(null);

  const [hate, setHate] = useState({
    hate: hateData.hate,
    hater_name: hateData.hater_name,
    hate_tag: hateData.hate_tag,
    hate_count: hateData.hate_count,
    crit_count: hateData.crit_count,
    rehate_count: hateData.rehate_count,
    date_time: hateData.date_time
  })

  let splitTime = hate.date_time.split('T')
  let splitTime2 = splitTime[1].slice(0,8)

  const [hateCount, setHateCount] = useState(0);
  const [rehateCount, setRehateCount] = useState(0);
  const [hatedisabled, setHateDisabled] = useState(false);
  const [rehatedisabled, setReHateDisabled] = useState(false);

  const incrementHateCount = async (event) => {
    setHateCount(hateCount + 1);
    event.preventDefault();
    let hateUpdated = await axios.get(
      `http://127.0.0.1:8000/addDislike/?hateid=${hateData.id}&sign=${1}`
    );
    hateButtons.current.classList.add("hate-disabled");
    hateButtons.current.style.color = "red";
  };

  const incrementRehateCount = async (event) => {
    setRehateCount(rehateCount + 1);
    event.preventDefault();
    let rehateUpdated = await axios.get(
      `http://127.0.0.1:8000/addRehate/?hateid=${hateData.id}&sign=${1}`
    );
    rehateButtons.current.classList.add("rehate-disabled");
    rehateButtons.current.style.color = "green";
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
          {hate.hater_name}{hate.hate_tag}
        </h3>
        <div className="hate-info">
          <h2 className="hate-text" type="text" name="text">
            {hate.hate}
          </h2>
          <h3
            className='hate-date'
            type="date"
            name="text">
            Time: {splitTime2} - {splitTime[0]}
            </h3>
        </div>
        <div className="hate-buttons">
          <button className="hate-criticisms" title="Criticism">
            <MessageIcon className="hate-crit"></MessageIcon> {hate.crit_count}
          </button>
          <button
            ref={rehateButtons}
            className="hate-rehate"
            title="Rehate"
            onClick={incrementRehateCount}
          >
            <AutorenewIcon className="hate-renew" disabled={rehatedisabled}></AutorenewIcon>{" "}
            {hate.rehate_count + rehateCount}
          </button>
          <button
            ref={hateButtons}
            className="hate-dislike"
            title="Dislike"
            onClick={incrementHateCount}
          >
            <HeartBrokenIcon className="hate-broken" disabled={hatedisabled}></HeartBrokenIcon>{" "}
            {hate.hate_count + hateCount}
          </button>
        </div>
      </div>
    </div>
  );
}
