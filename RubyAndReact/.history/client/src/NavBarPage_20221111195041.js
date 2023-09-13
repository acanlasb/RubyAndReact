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
        <div className="Brand">
          <h1>Video Games Database</h1>
        </div>
      </div>
    </div>
  );
}

export default NavBarPage;
