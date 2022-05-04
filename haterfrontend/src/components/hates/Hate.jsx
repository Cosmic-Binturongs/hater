import React, { useState, useEffect } from 'react';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import MessageIcon from '@mui/icons-material/Message';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Hate({ hateData, setToggle }) {
  const [hate, setHate] = useState({
    name: hateData.name,
    tag: hateData.tag,
    text: hateData.text,
  })

  return (
    <div className="hate-post">
      <div className="hate-form">
          <h3
            className="hate-name"
            type="text"
            name="name">
          {hate.name} {hate.tag}
          </h3>
        <div className="hate-info">
          <h2
            className="hate-text"
            type="text"
            name="text">
            {hate.text}
          </h2>
          <div className='hate-buttons'>
            <button className='hate-criticisms' title="Criticism">
              <MessageIcon className='hate-crit'></MessageIcon> 123
            </button>
            <button className='hate-rehate' title="Rehate">
              <AutorenewIcon className='hate-renew'></AutorenewIcon> 456
            </button>
            <button className='hate-dislike' title="Dislike">
              <HeartBrokenIcon></HeartBrokenIcon> 789
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}