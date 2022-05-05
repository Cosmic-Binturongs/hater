import React, { useState, useEffect } from 'react';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import MessageIcon from '@mui/icons-material/Message';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Hate({ hateData, setToggle }) {
  const [hate, setHate] = useState({
    // name: hateData.name,
    // tag: hateData.tag,
    // text: hateData.text,

    id: hateData.id,
    h_body: hateData.h_body,
    haters: hateData.haters
  })

  return (
    <div className="hate-post">
      <div className='hate-profile'>
        <div className='hate-profile-pic'>
          <img src={`https://avatars.dicebear.com/api/adventurer/${hate.id}.svg?flip=1`} alt="profile"></img>
        </div>
      </div>
      <div className="hate-form">
          <h3
            className="hate-name"
            type="text"
            name="name">
            {hate.id} {hate.haters}
          </h3>
        <div className="hate-info">
          <h2
            className="hate-text"
            type="text"
            name="text">
            {hate.h_body}
          </h2>
        </div>
        <div className='hate-buttons'>
          <button className='hate-criticisms' title="Criticism">
            <MessageIcon className='hate-crit'></MessageIcon> 123
          </button>
          <button className='hate-rehate' title="Rehate">
            <AutorenewIcon className='hate-renew'></AutorenewIcon> 456
          </button>
          <button className='hate-dislike' title="Dislike">
            <HeartBrokenIcon className='hate-broken'></HeartBrokenIcon> 789
          </button>
        </div>
      </div>
    </div>
  )
}