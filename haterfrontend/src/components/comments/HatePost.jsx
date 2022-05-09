import React from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import MessageIcon from "@mui/icons-material/Message";
import AutorenewIcon from "@mui/icons-material/Autorenew";
export default function HatePost(props) {
  let { hate } = props;
  let splitTime;
  let splitTimeDate;
  let splitTime2;
  if (hate.date_time) {
    splitTime = hate.date_time.split("T");
    splitTimeDate = splitTime[0].slice(5, 10);
    splitTime2 = splitTime[1].slice(0, 5);
  }
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
            {splitTimeDate} - {<p className="hate-date-time">{splitTime2}</p>}
          </h3>
        </div>
        <div className="hate-buttons">
          <button className="hate-criticisms" title="Criticism">
            <MessageIcon className="hate-crit"></MessageIcon> {hate.crit_count}
          </button>
          <button className="hate-rehate" title="Rehate">
            <AutorenewIcon className="hate-renew"></AutorenewIcon>
            {hate.rehate_count}
          </button>
          <button className="hate-dislike" title="Dislike">
            <HeartBrokenIcon className="hate-broken"></HeartBrokenIcon>
            {hate.hate_count}
          </button>
        </div>
      </div>
    </div>
  );
}
