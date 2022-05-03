import React from "react";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <img
          className="image"
          src={
            "https://icons.iconarchive.com/icons/femfoyou/angry-birds/1024/angry-bird-icon.png"
          }
          alt="image"
        />
        <h3>Hate your interest</h3>
        <h3>Hear what people are hating</h3>
        <h3>Join the conversation</h3>
      </div>
      <div className="right">
        <form className="form">
          <input
            className="input"
            placeholder="Phone, email, or username:"
            type="text"
            name="name"
          />

          <input
            className="input"
            placeholder="Password "
            type="text"
            name="password"
          />
          <Button id="login" type="submit" variant="outlined">
            Login
          </Button>
        </form>

        <div className="middle-right">
          <h3>See what's happening in the world right now</h3>
          <h4>Join Hater Today</h4>
          <Button id="sign-up" variant="outlined">
            Sign up with Google
          </Button>

          <Button id="sign-up" variant="outlined">
            Sign up with phone or email
          </Button>

          {/* <Button id="main-login" variant="outlined">
            Login
          </Button> */}
        </div>
      </div>
    </div>
  );
}
