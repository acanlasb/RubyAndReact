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
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Loggedin from "./Lo"

function App() {
   const [user, setUser] = useState(null);
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
     // auto-login
     fetch("/me").then((r) => {
       if (r.ok) {
         r.json().then((user) => {
           setUser(user);
           setIsAuth(true);
         });
       }
     });
   }, []);

   if (!isAuth) {
     return (
       <div>
         <p>
           This is just a video game database. Please sign in to see the games
           information.
         </p>
         <NavBar />
         <HomePage />
       </div>
     );
   }
  return (
    <div className="App">
      <Router>{false ?<Loggedin/> : <Loggedout/>}</Router>
    </div>
  );
}

export default App;
