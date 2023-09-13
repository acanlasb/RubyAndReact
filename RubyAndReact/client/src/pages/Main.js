import React from "react";
import { Link } from "react-router-dom";


function Main() {
  return (
    <div>
      <div className="App">
        <h1 className="Title">Video Game Database</h1>
        <h3 className="Desc">
          Sign up or Login to access the video game database
        </h3>
        <br />
        <button className="cybr-btn">
          <Link to="signup">
            Sign<span aria-hidden> Up</span>
            <span aria-hidden className="cybr-btn__glitch">
              Sign Up Sign Up Sign Up
            </span>
          </Link>
        </button>
        <br />
        <br />
        <button className="cybr-btn">
          <Link to="login">
            Login<span aria-hidden> Here</span>
            <span aria-hidden className="cybr-btn__glitch">
              Login Login Login
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Main;
