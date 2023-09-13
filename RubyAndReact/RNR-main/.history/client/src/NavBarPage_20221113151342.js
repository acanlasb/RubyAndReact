import React from "react";
import axios from "axios";
import Games from "./Games";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function NavBarPage() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <div className="Navbar">
        <h1>Video Games Database</h1>
        <div className="Navbar-right">
        <a href="/" onClick={auth.handleLogout} className="Logout">
          Logout
        </a>
        </div>
      </div>
    </div>
  );
}

export default NavBarPage;
