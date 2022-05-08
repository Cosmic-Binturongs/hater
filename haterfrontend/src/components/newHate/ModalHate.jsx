import axios from 'axios';
import React from 'react';
import { useState, useRef } from 'react';
import { createHate } from '../../services/hates'
import { useNavigate } from "react-router-dom";
import '../hates/Hates.css'
import HatesFeed from '../hates/HatesFeed';
import { store } from "../../state/store"
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import CSRFToken from "../../components/CSRFToken";


export default function ModalHate({ setShowModal }) {
  const user = useSelector((state) => state.user);
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

  const [toggle, setToggle] = useState(false);

  const modalButtonRef = useRef();
  
  const closeModal = (e) => {
    if (e.target === modalButtonRef.current) {
      setShowModal(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let postOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
      body: JSON.stringify({
        h_body: hate.h_body,
        haters: user.id,
      }),
    };
    fetch("http://localhost:8000/createHate", postOptions)
      .then((res) => res.json())
      .then((data) => {
        if (!data["error"]) {
          setToggle((prev) => !prev);
        }
      });
    setShowModal(false)
    window.location.reload();
  }

  return (
    <div className="hate-modal-text-box">
      <div className='hate-profile-textbox'>
        <span className='hate-forms-home'>Home</span>
        <div className='hate-profile-pic'>
          <img src={`https://avatars.dicebear.com/api/adventurer/${user.name}.svg?flip=1`} alt="profile"></img>
        </div>
      </div>
      <div className="hates-form">
        <form className="hates-form-box" onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            className="hates-form-text"
            id="hateFormText"
            placeholder="Who Hatin'"
            name="h_body"
            value={hate.h_body}
            maxLength="140"
            type="text"
          />
          <input
            className="hates-modal-button-up"
            type="submit"
            value="Hate"
          />
        </form>
      </div>
    </div>
  )
}