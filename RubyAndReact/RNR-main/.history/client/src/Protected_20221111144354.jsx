import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import Games from "./Games";
import NewGameForm from "./NewGameForm";
import GameItem from "./GameItem";

const API_URL = "/api/v1/games";
function getAPIDATA() {
  return axios.get(API_URL).then((response) => response.data);
}
function Protected() {
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

  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleAddGame(addedGame) {
    setGames((games) => [...games, addedGame]);
  }

    function handleUpdateGame(updatedGame) {
      setGames((udgames) =>
        games.map((game) => {
          return game.id === updatedGame.id ? updatedGame : game;
        })
      );
    }

    function handleDeleteGame(deletedGame) {
      setGames((game) => games.filter((game) => game.id !== deletedGame.id));
    }

  return (
    <div className="App">
      <p>Email: {auth.email}</p>
      {/* <p>{JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>has been logged in.</p>}
      {!auth.authenticated && <p>You're not logged in.</p>}
      <HomePage />
      <div className="Add">
        <NewGameForm onAddGame={handleAddGame} />
      </div>
      <div className="GameList">
        <Games games={games} />
      </div>
      <section className="spice-list">
        {spices.map((spice) => (
          <GameItem
            key={game.id}
            spice={game}
            onUpdateSpice={handleUpdateGame}
            onDeleteSpice={handleDeleteGame}
          />
        ))}
      </section>
    </div>
  );
}

export default Protected;
