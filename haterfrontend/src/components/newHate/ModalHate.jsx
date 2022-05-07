import { TextareaAutosize } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState, useRef } from 'react';
import { createHate } from '../../services/hates'
import { useNavigate } from "react-router-dom";
import '../hates/Hates.css'
import HatesFeed from '../hates/HatesFeed';


export default function ModalHate({setShowModal}) {
  let navigate = useNavigate();
  const [hate, setHate] = useState({
    h_body: "",
    haters: 1
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setHate({
      ...hate,
      [name]: value
    })
  }

  const modalButtonRef = useRef();
  
  const closeModal = (e) => {
    if (e.target === modalButtonRef.current) {
      setShowModal(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    let created = await axios.post("http://127.0.0.1:8000/hates/", {
      h_body: hate.h_body,
      hate_count: 0,
      rehate_count:0,
      crit_count:0,
      haters: hate.haters,
    })
    setShowModal(false)
    window.location.reload();
  }

  return (
    <div className="hate-text-box">
      <div className='hate-profile-textbox'>
        <span className='hate-forms-home'>Home</span>
        <div className='hate-profile-pic'>
          <img src={`https://avatars.dicebear.com/api/adventurer/${hate.id}.svg?flip=1`} alt="profile"></img>
        </div>
      </div>
      <div className="hates-form">
        <form className="hates-form-box" onSubmit={handleSubmit}>
          <TextareaAutosize
            className="hates-form-text"
            id="hateFormText"
            placeholder="Who's Hatin'"
            type="text"
            name="h_body"
            value={hate.h_body}
            maxLength="140"
            onChange={handleChange}
            required
          />
          <input
            className="hates-button-up"
            type="submit"
            value="Hate"
          />
        </form>
      </div>
    </div>
  )
}