import React from "react";
import axios from "axios";
import NavBarPage from "./NavBarPage";
import Games from "./Games";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function HomePage() {
  return (
    <div className="Homepage">
      <NavBarPage />
    </div>
  );
}

export default HomePage;
