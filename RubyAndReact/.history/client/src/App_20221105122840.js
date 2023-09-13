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
       <div className="App">
         <p>
           This is just a video game database. Please sign in to see the games
           information.
         </p>
       </div>
     );
   }
  return (
    <div className="App">
      <NavBar />
      <p>
        This is just a video game database. Please sign in to see the games
        information.
      </p>
      <HomePage />
    </div>
  );
}

export default App;
