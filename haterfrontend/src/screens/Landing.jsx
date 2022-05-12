import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import LandingLogo from "../images/hater-logos.jpeg";
import LandingLogoInverted from "../images/hater-logos_transparent_inverted_color.png";
import Cookies from "js-cookie";
import CSRFToken from "../components/CSRFToken";
import { useNavigate } from "react-router-dom";
import { store } from "../state/store";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  let headerInfo = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken"),
  };
  let handleLogin = (e) => {
    e.preventDefault();
    let loginOptions = {
      method: "POST",
      headers: headerInfo,
      credentials: "include",
      body: JSON.stringify(form),
    };
    let options = {
      method: "GET",
      headers: headerInfo,
      credentials: "include",
    };

    fetch("https://haterbackend.herokuapp.com/user/login", loginOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data["error"]) {
          return alert(data["error"]);
        } else {
          fetch("https://haterbackend.herokuapp.com/user/grabProfile", options)
            .then((res) => res.json())
            .then((data) => {
              store.dispatch({ type: "set", payload: data.profile });
            })
            .then(() => navigate("/home"))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  let signOut = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
    };
    fetch("https://haterbackend.herokuapp.com/user/logout", options)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch({ type: "set", payload: { name: "Guest" } });
      });
  };
  return (
    <div className="home">
      <div className="landingLeft">
        <img className="logoMain" src={LandingLogo} alt="mainlogo" />
        <div className="slogan">
          <h3>Hate your interest</h3>
          <h3>Hear what people are hating</h3>
          <h3>Join the conversation</h3>
        </div>
      </div>
      <div className="landingRight">
        <div className="rightLogoContainer">
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
        {!user.tag ? (
          <form onSubmit={handleLogin} className="landingForm">
            <CSRFToken></CSRFToken>
            <input
              onChange={handleChange}
              className="landingLoginInput"
              placeholder="Username"
              type="text"
              name="username"
            />

            <input
              onChange={handleChange}
              className="landingLoginInput"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <Button id="login" type="submit">
              Login
            </Button>
          </form>
        ) : (
          <div className="landing-signout">
            <Link className="landing-home-link" to="/home">
              <Button>Home 🏡</Button>
            </Link>
            <Link className="landing-signout-link" onClick={signOut} to="/">
              <Button>Sign out 🚪</Button>
            </Link>
          </div>
        )}

        <div className="middle-right">
          <div className="landLogSlogal">
            <h3>See what's happening in the world right now</h3>
            <h4>Join Hater Today</h4>
          </div>
          <Link id="landing-signup-link" to="/signup">
            <Button id="landing-sign-up">Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
