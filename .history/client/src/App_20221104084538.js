import React from "react";
import { Routes, Route, Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {BrowserRouter} from "react-router-dom";
import NavBarPage from "./NavBarPage";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  //create new game
//     const [name, setName] = useState("");
//     const [releasedate, setReleasedate] = useState("");
//     const [platforms, setPlatforms] = useState("");
//     const [genre, setGenre] = useState("");
//     const [errors, setErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//       const navigate = useNavigate();
//
//       function handleSubmit(e) {
//         e.preventDefault();
//         setIsLoading(true);
//         fetch("/api/v1/games", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name, releasedate, platforms, genre }),
//         }).then((r) => {
//           setIsLoading(false);
//           if (r.ok) {
//             navigate("/games");
//           } else {
//             r.json().then((err) => setErrors(err.errors));
//           }
//         });
//       }


// users
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user););
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <p>
        This is just a video game database. Please sign in to see the games
        information.
      </p>
    </div>
  );
}

export default App;
