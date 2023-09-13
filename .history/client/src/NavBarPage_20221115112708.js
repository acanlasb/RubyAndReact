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
        <h1 className="">Video Games Database</h1>
        <button className="cybr-btn">
          <a href="/" onClick={auth.handleLogout} className="Logout">
            Logout<span aria-hidden> Here</span>
            <span aria-hidden className="cybr-btn__glitch">
              Logout Logout
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default NavBarPage;
