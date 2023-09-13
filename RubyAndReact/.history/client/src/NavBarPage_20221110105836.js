import React from "react";
import axios from "axios";
import Games from "./Games";
import GamesForm from "./GamesForm";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

function NavBarPage() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <div className="Navbar">
        <div className="Brand">
          <h1>Video Games Database</h1>
        </div>
        <ul className="Menu">
          <a href="/" onClick={auth.handleLogout} className="Logout">
            Logout
          </a>
        </ul>
        <li>
          <a href="/gamesform">Add New Games</a>
        </li>{" "}

      </div>
    </div>
  );
}

export default NavBarPage;
