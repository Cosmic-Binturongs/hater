import React from "react";
import "../styles/SignUp.css";
import { useState } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfrim] = useState("");
  const [valid, setValid] = useState(true);

  function match(event) {
    event.preventDefault();
    if (password === passwordConfirm) {
      setValid(true);
    } else {
      setValid(false);
      alert("Password Don't Match");
    }
  }

  function Password(event) {
    let str = event.target.value;
    setPassword(str);
  }

  function PasswordConfirm(event) {
    let str = event.target.value;
    setPasswordConfrim(str);
  }
  return (
    <div class="signup-container">
      <form onSubmit={match}>
        <h1>Sign Up</h1>

        <label for="email">
          <h3>Email</h3>
        </label>
        <input
          className="signup-inputs"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />
        <label for="username">
          <h3>Username</h3>
        </label>
        <input
          className="signup-inputs"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label for="psw">
          <h3>Password</h3>
        </label>
        <input
          className="signup-inputs"
          onChange={Password}
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label for="confirm">
          <h3>Confirm Password</h3>
        </label>
        <input
          className="signup-inputs"
          onChange={PasswordConfirm}
          type="password"
          placeholder="Confirm Password"
          name="confirm-psw"
          required
        />
        <div className="singup-button-container">
          <button type="submit" class="signup-btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
