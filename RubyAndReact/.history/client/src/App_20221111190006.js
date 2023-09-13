import React from "react";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Protected from "./Protected";
import RequireAuth from "./RequireAuth";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import {useNavigate, Navigate} from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function App() {
  const navigate = useNavigate();
  
      const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);

      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

  return (
    <div className="App">
      <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/protected" element={<Protected />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
