import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomePage from "../HomePage";
import Games from "../Games";
import AddGameForm from "../AddGameForm";
import EditGameForm from "../EditGameForm";

  const API_URL = "/api/v1/games";
  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data);
  }

function Protected(){
  //authentication
    const auth = useContext(AuthContext);
//games display
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
//creates game
  const addGame = (game) => {
    game.id = games.length + 1;
    setGames([...games, game]);
  };
  return (
    <div className="App">
      <p>Email: {auth.email}</p>
      {/* <p>{JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>has been logged in.</p>}
      {!auth.authenticated && <p>You're not logged in.</p>}
      <HomePage />
      <div className="six columns">
        <h2>Add Game or Games</h2>
        <AddForm addUser={addUser} />
      </div>
      <Games games={games} />
    </div>
  );
};

export default Protected;
