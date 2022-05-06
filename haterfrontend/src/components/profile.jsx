import { useState, useEffect } from "react"
import './profile.css';

export default function Profile(props) {
  const [content, setcontent] = useState(<img src={props.picture}></img>);


  return (

    <div className="pro-container grid-container">
      <div className="headerP">
        <h4 className="profile-h4">David {props.name}</h4>
        <p classname="pro-tweet-count">191 {props.tweets} Tweets</p>
      </div>
      <div className="bkgrndP">
      </div>
      <img className="profile-image" src={require('../assets/www.jpg')} alt="" />
      <div className='profile-image-button'>

        <input type="button" onClick={""} className="button-62" name="" value="Edit profile" id="" />
      </div>
      <div className='userNames'>
        <h4 className="profile-h4">David {props.name}</h4>
        <p>@davewgoode {props.handle} </p>
      </div>
      <div className="profileInfo">

        <h4 className="profile-h4">{props.bio}Gigachad reaact developer and influencer. </h4>
      </div>
      <div className="user-locale-date">
        <p>{props.address} Brooklyn, NY </p><p>Date Joined: {props.join_date} 2009</p>
      </div>
      <div className="user-followers">
        <p>69 {props.following} Following</p><p> 41 {props.followers} Followers</p>
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


  )

}