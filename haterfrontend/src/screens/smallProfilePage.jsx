import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getAllHates, getHates, getUsers } from "../services/hates.js";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import MessageIcon from "@mui/icons-material/Message";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useEffect, useState } from "react";
import "../styles/smallProfilePage.css";
import MiniHates from "../components/miniHates/miniHates.js";

export default function SmallProfilePage() {
  let { ID } = useParams();

  const [face, setFace] = useState("verybamboo");
  const [list, setList] = useState([
    {
      crit_count: 0,
      date_time: "2022-05-08T22:07:12.777887Z",
      hate: "bamboooo",
      hate_count: 0,
      hate_tag: "bam",
      hater_id: 2,
      hater_name: "verybamboo",
      id: 2,
      rehate_count: 0,
    },
  ]);
  const [datas, setDatas] = useState([]);
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const totalCrits = [];
  const totalRehates = [];
  const totalHates = [];
  let critSum = 0;
  let hateSum = 0;
  let rehateSum = 0;

  useEffect(() => {
    const fetchHates = async () => {
      const response = await getAllHates();
      setDatas(response);

      const hatess = await getHates();
      setList(hatess);

      const getPeeps = await getUsers();
      setUsers(getPeeps);
    };
    fetchHates();
  }, [toggle]);

  {
    list.map(
      (newData) =>
        JSON.stringify(newData.hater_id).includes(ID) &&
        (totalHates.push(newData.hate_count),
        totalCrits.push(newData.crit_count),
        totalRehates.push(newData.rehate_count))
    );
  }

  totalCrits.forEach((value) => {
    critSum += value;
  });
  totalRehates.forEach((value) => {
    rehateSum += value;
  });
  totalHates.forEach((value) => {
    hateSum += value;
  });

  return (
    <div className="proPageContainer">
      <div className="contentContainer">
        <div className="frame"></div>
        <div className="proPageContent">
          <div className="proPageLinks">
            <div className="proLogo"></div>
            <Link to="/home" className="proHome"></Link>
            <Link to="/" className="proRoot"></Link>
          </div>
          {users.map(
            (data) =>
              JSON.stringify(data.id).includes(ID) && (
                <div className="miniProBody">
                  <div className="miniProBodyFrame"></div>
                  <div className="miniProProfilePic">
                    <img
                      src={`https://avatars.dicebear.com/api/adventurer/${data.name}.svg?flip=1`}
                    ></img>
                  </div>
                  <div className="proTweetCount">
                    <div className="total">@{data.tag}</div>
                    <MessageIcon className="hate-crit"></MessageIcon>
                    <div className="total">{critSum}</div>
                    <AutorenewIcon className="hate-renew"></AutorenewIcon>
                    <div className="total">{rehateSum}</div>
                    <HeartBrokenIcon className="hate-broken"></HeartBrokenIcon>
                    <div className="total">{hateSum}</div>
                  </div>
                  <div className="smallProfileHateContainer">
                    {list.map(
                      (newData) =>
                        JSON.stringify(newData.hater_id).includes(ID) && (
                          <MiniHates
                            profileID={data.user}
                            hater_tag={data.tag}
                            id={data.id}
                            hater_name={data.name}
                            hate={newData.h_body}
                            hate_count={newData.hate_count}
                            rehate_count={newData.rehate_count}
                            crit_count={newData.crit_count}
                          />
                        )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
