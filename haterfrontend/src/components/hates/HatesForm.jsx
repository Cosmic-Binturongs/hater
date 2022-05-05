import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { createHate } from '../../services/hates'
import './Hates.css'


export default function HatesForm({ setToggle }) {
  const [hate, setHate] = useState({
    name: "",
    tag: "",
    text: "",
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
    <form onSubmit={handleSubmit}>
      <div className='hates-home-text'>Home</div>
      <div className="hates-form">
        <TextareaAutosize
          className="hates-form-text"
          id="hateFormText"
          placeholder="Who's Hatin'"
          type="text"
          name="text"
          value={hate.text}
          maxLength="140"
          onChange={handleChange}
          required
        />
         <input
          className="hates-button-up"
          type="submit"
          value="Hate"
        />
      </div>
    </form>
  )
}