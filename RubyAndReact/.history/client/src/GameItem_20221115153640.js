import React from "react";
import { useContext, useEffect, useState } from "react";
import {Navgiate}

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleUpdateGame(game) {
    fetch(`/api/v1/games/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game: game }),
    })
      .then((r) => r.json())
      .then(onUpdateGame);
      navigate(/);
  }

  function handleDeleteGame() {
    fetch(`/api/v1/games/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteGame(game);
        alert("Game deleted successfully.");
      }
    });
  }

  return (
    <div className="GameItem">
      <div className="details">
        <h2>{name}</h2>
        <p>Release Date: {release_date}</p>
        <p>Platforms: {platforms}</p>
        <p>Genres: {genres}</p>
        <p>
          <button className="sml-btn" onClick={handleUpdateGame}>
            Update Game
          </button>
          <button className="sml-btn" onClick={handleDeleteGame}>
            Delete Game
          </button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
