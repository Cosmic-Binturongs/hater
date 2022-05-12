import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
function ErrorScreen() {
  return (
    <div className="ErrorContainer">
      <nav className="ErrorNav">
        <Link to="/home" className="ErrorLink">
          Home
        </Link>
        <Link to="/profile" className="ErrorLink">
          Profile
        </Link>
        <Link to="/" className="ErrorLink">
          Login
        </Link>
      </nav>
      <div className="errorMessage">PAGE NOT FOUND</div>
      <div className="ErrorImageContainer">
        <div className="theBird">
          <div className="birdContainer">
            <div className="leftWing"></div>
            <div className="floppingBird">
              <div className="eyeBrowContainer">
                <div className="eyeBrow1"></div>
                <div className="eyeBrow2"></div>
              </div>
              <div className="eyeContainer">
                <div className="eyes">
                  <div className="eyeLids"></div>
                  <div className="pupils"></div>
                </div>
                <div className="beekContainer">
                  <div className="beek"></div>
                </div>
                <div className="eyes">
                  <div className="eyeLids"></div>
                  <div className="pupils"></div>
                </div>
              </div>
            </div>
            <div className="rightWing"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorScreen;
