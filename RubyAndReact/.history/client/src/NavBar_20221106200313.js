import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Games from "./Games";
// import Home from "./pages/Home";
// import Protected from "./pages/Protected";
// import Public from "./pages/Public";
import { useNavigate } from "react-router-dom";



function NavBar() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }


  return (
    <div className="Navbar">
      <div className="Brand">
        <h3>Video Games Database</h3>
      </div>
      <ul className="Menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
        <li>
          <a href="/" onClick={handleLogoutClick}>
            Log Out
          </a>
        </li>
        {/* <li>
          <a href="/home">home</a>
        </li>
        <li>
          <a href="/protected">protected</a>
        </li>
        <li>
          <a href="/public">public</a>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
