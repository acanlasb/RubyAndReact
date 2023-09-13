import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import NewGameForm from "../games/NewGameForm";
import GameItem from "../games/GameItem";
import LoginForm from "../auth/LoginForm";
import Games from "../games/Games";
import Page from ""
import { AuthContext } from "../auth/AuthProvider";
import { GiConsoleController } from "react-icons/gi";

const API_URL = "http://localhost:3000/api/v1/games";

function getAPI() {
  return axios.get(API_URL).then((response) => response.data);
}

function Protected() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const fetchGames = async () => {
  //     const res = await axios.get(
  //       `http://127.0.0.1:3000/api/v1/games?q=${filter}`
  //     );
  //     setGames(res.data);
  //   };
  //   if (filter.length === 0 || filter.length > 2) fetchGames();
  // }, [filter]);

  //games section
  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  //read
  useEffect(() => {
    let mounted = true;
    getAPI().then((items) => {
      if (mounted) {
        setGames(items);
      }
    });
    return () => (mounted = false);
  }, []);
  //create
  function handleAddGame(addedGame) {
    setGames((games) => [...games, addedGame]);
  }
  //updated
  function handleUpdateGame(updatedGame) {
    setGames((games) =>
      games.map((game) => {
        return game.id === updatedGame.id ? updatedGame : game;
      })
    );
  }
  //delete
  function handleDeleteGame(deletedGame) {
    setGames((game) => games.filter((game) => game.id !== deletedGame.id));
  }

  //auto login
  useEffect(() => {
    fetch("/authorized").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <div>
        <div className="Protected">
          <HomePage />
          <div className="UsersandCreate">
            <p>
              Yay! Hello. You're logged in. <GiConsoleController />
            </p>
            <NewGameForm onAddGame={handleAddGame} />
          </div>
          {/* <input
            className="search"
            placeholder="search here"
            onChange={(e) => setFilter(e.target.value)}
          />
          {<Games games={[]}/>} */}
          {/* <div className="readsection">
            <Games games={games} />
          </div> */}
          <div className="GameListDelete">
            <h1 className="App-Title">Upcoming Games</h1>
            {games.map((game) => (
              <GameItem
                key={game.id}
                game={game}
                onUpdateGame={handleUpdateGame}
                onDeleteGame={handleDeleteGame}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <LoginForm onLogin={setUser} />;
  }
}

export default Protected;
