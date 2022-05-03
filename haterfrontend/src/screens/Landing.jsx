import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import "../styles/Landing.css";
export default function Home() {
  return (
    <div className="home">
      <div className="landingLeft">
        <img
          className="angryBird"
          src={
            "https://icons.iconarchive.com/icons/femfoyou/angry-birds/1024/angry-bird-icon.png"
          }
          alt="image"
        />
        <div className="slogan">
        <h3>Hate your interest</h3>
        <h3>Hear what people are hating</h3>
          <h3>Join the conversation</h3>
          </div>
      </div>
      <div className="landingRight">
        <form className="landingForm">
          <Link className="LogoLink" to="/home">$#%@ YOU</Link>
          <input
            className="landingLoginInput"
            placeholder="Username"
            type="text"
            name="name"
          />

          <input
            className="landingLoginInput"
            placeholder="Password "
            type="text"
            name="password"
          />
          <Button id="login" type="submit" variant="outlined">
            Login
          </Button>
        </form>

        <div className="middle-right">
          <div className="landLogSlogal">
          <h3>See what's happening in the world right now</h3>
            <h4>Join Hater Today</h4>
            </div>
          <Button id="google-sign" variant="outlined">
            Sign up with Google
          </Button>

          <Button id="sign-up" variant="outlined">
            Sign up 
          </Button>
        </div>
      </div>
    </div>
  );
}
