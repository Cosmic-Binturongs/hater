import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import Profile from "../components/profile";
import LandingLogo from "../images/hater-logos.jpeg"
import LandingLogoInverted from "../images/hater-logos_transparent_inverted_color.png"


export default function Home() {
  return (
    <div className="home">
      <div className="landingLeft">
        <img
          className="logoMain"
          src={LandingLogo}
          alt="mainlogo"
        />
        <div className="slogan">
          <h3>Hate your interest</h3>
          <h3>Hear what people are hating</h3>
          <h3>Join the conversation</h3>
        </div>
      </div>
      <div className="landingRight">
        <div classname="rightLogoContainer">
          <div className="logoInvDiv">
      <img
          className="logoInvert"
          src={LandingLogoInverted}
          alt="invlogo"
            />
          </div>
          <div className="fYou">
          <Link className="LogoLink" to="/home">
            $#%@ YOU
            </Link>
            </div>
          </div>
        <form className="landingForm">
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
          <Link id="landing-signup-link" to="/signup">
            <Button id="landing-sign-up" variant="outlined">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
