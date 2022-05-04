import { useState, useEffect } from "react"
import './profile.css';

export default function Profile(props) {





  return (
    <div className='mid'>
      <div className="pro-container grid-container">
        <div className="headerP">
          <h4 className="profile-h4">David</h4>
          <p>191 Tweets</p>
        </div>
        <div className="bkgrndP">
        </div>
        <img className="profile-image" src={require('../assets/www.jpg')} alt="" />
        <div className='profile-image-button'>

          <input type="button" onClick={""} className="button-62" name="" value="Edit profile" id="" />
        </div>
        <div className='userNames'>
          <h4 className="profile-h4">David</h4>
          <p>@davewgoode</p>
        </div>
        <div className="profileInfo">

          <h4 className="profile-h4">Gigachad reaact developer and influencer. </h4>
        </div>
        <div className="user-locale-date">
          <p>Brooklyn, NY </p><p>Date Joined: 2009</p>
        </div>
        <div className="user-followers">
          <p>69 Following</p><p> 41 Followers</p>
        </div>
        <div className='tweets'>
          <ul className='tweetsNav'>
            <li>Tweets</li>
            <li>Tweets & Replies</li>
            <li>Media</li>
            <li>Likes</li>
          </ul>
        </div>

      </div>

    </div>
  )

}