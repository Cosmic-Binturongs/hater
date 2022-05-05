import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { createHate } from '../../services/hates'
import './Hates.css'
import HatesFeed from './HatesFeed';


export default function HatesForm({ setToggle}) {
  const [hate, setHate] = useState({
    h_body: "",
    haters: 21,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setHate({
      ...hate,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await createHate(hate)
    setToggle(prev => !prev)
  }

  return (
  <div className="hate-text-box">
    <div className='hate-profile-textbox'>
      <span className='hate-forms-home'>Home</span>
        <div className='hate-profile-pic'>
          <img src={`https://avatars.dicebear.com/api/adventurer/${hate.name}.svg?flip=1`} alt="profile"></img>
        </div>
    </div>
    <div className="hates-form">
        <form onSubmit={handleSubmit}>
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