import React from "react";
import { useContext, useEffect, useState } from "react";
import UpdateGameForm from "./UpdateGameForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;
  const [games, setGames] = useState([]);
  const [updategame, setUpdategame] = useState(false);


  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleUpdateGame(game, id) {
    setUpdategame(true);
  }

  function handleDeleteGame() {
    fetch(`/api/v1/games/${game.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteGame(game);
        alert("Has been deleted successfully! Yay!( ﾟヮﾟ)/🎉🗑️🚮");
      }
    });
  }
  return (
    <div className="conditional">
      {updategame ? (
        <UpdateGameForm id={id} />
      ) : (
        <div className="GameItem">
          <div className="details">
            <h2>
              {id}-{name}
            </h2>
            <p>Release Date: {release_date}</p>
            <p>Platforms: {platforms}</p>
            <p>Genres: {genres}</p>
            <p>
              <button className="sml-btn" onClick={handleUpdateGame}>
                Update Game
              </button>{" "}
              <button className="del-btn" onClick={handleDeleteGame}>
                Delete Game
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameItem;
// this is ternary operation {state ? ("renders true") : ("renders false")}
