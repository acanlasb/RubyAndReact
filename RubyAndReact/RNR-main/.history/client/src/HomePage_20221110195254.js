import React from "react";
import axios from "axios";
import NavBarPage from "./NavBarPage";
import Games from "./Games";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";import { AuthContext } from "./providers/AuthProvider";

function HomePage() {
  return (
    <div className="App">
      <NavBarPage />
      <div className="six columns">
        <h2>Add user</h2>
      </div>
    </div>
  );
}

export default HomePage;
