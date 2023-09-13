import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Games from "./Games";


function NavBar() {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

    const [user, setUser] = useState(null);

  return (
    <div className="Navbar">
      {/* <div className="Brand">
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
          <a href="/login">Log In</a>
        </li>
      </ul> */}
      {/* <Router>{false ?<LoggedIn/> : <LoggedOut/>}</Router> */}
    </div>
  );
}

export default NavBar;
