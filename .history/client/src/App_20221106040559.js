import React from "react";
import { Routes, Route, Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Home from "../components/Home"


function App() {
//    const [user, setUser] = useState(null);
//    const [isAuth, setIsAuth] = useState(false);
//
//    useEffect(() => {
//      // auto-login
//      fetch("/me").then((r) => {
//        if (r.ok) {
//          r.json().then((user) => {
//            setUser(user);
//            setIsAuth(true);
//          });
//        }
//      });
//    }, []);
//
//    if (!isAuth) {
//      return (
//        </div>
//      );
//    }
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
