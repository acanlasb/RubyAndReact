import React from 'react';
import { useNavigate, Navigate } from "react";

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;
  const navigate = useNavigate();
 function handleUpdateGame(game) {
   fetch(`/api/v1/games/${id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({game: game}),
   })
     .then((r) => r.json())
     .then(onUpdateGame);
      navigate("/protected");


 }

function handleDeleteGame() {
    fetch(`/api/v1/games/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteGame(game);
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
          <button class="sml-btn" onClick={handleUpdateGame}>
            <a href="/updategameform">
              Update Game
            </a>
          </button>
          <button class="sml-btn" onClick={handleDeleteGame}>
            Delete Game
          </button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
