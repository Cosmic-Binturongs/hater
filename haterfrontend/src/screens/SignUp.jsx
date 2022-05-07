import React from "react";
import "../styles/SignUp.css";
import { useState } from "react";
import Cookies from "js-cookie";
import CSRFToken from "../components/CSRFToken";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    re_password: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    if (form.password === form.re_password) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        credentials: "include",
        body: JSON.stringify(form),
      };

      fetch("http://localhost:8000/user/register", options)
        .then((res) => res.json())
        .then((data) => {
          data["error"] ? alert(data["error"]) : navigate("/home");
        })
        .catch((err) => console.log(err));
    } else {
      alert("passwords dont match");
    }
  };
  let updateFormData = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="signup-container">
      <CSRFToken></CSRFToken>

      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          <h3>Username</h3>
        </label>
        <input
          onChange={updateFormData}
          className="signup-inputs"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label>
          <h3>Password</h3>
        </label>
        <input
          onChange={updateFormData}
          className="signup-inputs"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <label>
          <h3>Confirm Password</h3>
        </label>
        <input
          onChange={updateFormData}
          className="signup-inputs"
          type="password"
          placeholder="Confirm Password"
          name="re_password"
          required
        />
        <div className="singup-button-container">
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
