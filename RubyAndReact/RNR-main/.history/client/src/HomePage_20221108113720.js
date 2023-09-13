import React from "react";
import axios from "axios";
import NavBarPage from "./NavBarPage";
import Games from "./Games";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";import { AuthContext } from "../providers/AuthProvider";



  // const API_URL = "/api/v1/games";
  // function getAPIDATA() {
  //   return axios.get(API_URL).then((response) => response.data);
  // }
function HomePage() {
    const auth = useContext(AuthContext);

  //games
  // const [games, setGames] = useState([]);
  // useEffect(() => {
  //   let mounted = true;
  //   getAPIDATA().then((items) => {
  //     if (mounted) {
  //       setGames(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  //create new game
//   const [name, setName] = useState("");
//   const [releasedate, setReleasedate] = useState("");
//   const [platforms, setPlatforms] = useState("");
//   const [genre, setGenre] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//
//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("/api/v1/games", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, releasedate, platforms, genre }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         navigate("/games");
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

  return (
    <div className="App">
      <NavBarPage />
      {/* <Games games={games} /> */}
    </div>
  );
}

export default HomePage;
