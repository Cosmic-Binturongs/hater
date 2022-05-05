import React from "react";
import "../styles/SignUp.css";

export default function SignUp() {
  return (
    <div class="signup-container">
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
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <label for="repeat">
        <h3>Repeat Password</h3>
      </label>
      <input
        className="signup-inputs"
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />
      <div className="singup-button-container">
        <button type="submit" class="signup-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}
