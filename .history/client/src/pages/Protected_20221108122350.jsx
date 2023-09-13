import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Games from "../Games";
import HomePage from "../HomePage";

  const API_URL = "/api/v1/games";
  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data);
  }

function Protected(){
    const [games, setGames] = useState([]);
    useEffect(() => {
      let mounted = true;
      getAPIDATA().then((items) => {
        if (mounted) {
          setGames(items);
        }
      });
      return () => (mounted = false);
    }, []);

  const auth = useContext(AuthContext);
//     const [games, setGames] = useState([]);
//
//   useEffect(() => {
//     getGames();
//   }, []);
//
//   const getGames = async () => {
//     try {
//       let res = axios.get("/api/v1/games");
//       setGames(res.data);
//     } catch (err) {
//       alert("err in getGames()");
//     }
//   };

  return (
    <div className="App">
      <p>Email: {auth.email}</p>
      {/* <p>{JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>has been logged in.</p>}

      {!auth.authenticated && <p>You're not logged in.</p>}
      <a href="/" onClick={auth.handleLogout} className="Logout">
        Logout
      </a>
      <Games games={games} />
      <HomePage />
    </div>
  );
};

export default Protected;
