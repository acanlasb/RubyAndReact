import React from 'react';

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, release_date, platforms, genres } = game;

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
    <div className="spice-item card">
      <div className="details">
        <h1 className="App-Title">Upcoming Games</h1>
        <h2>{name}</h2>
        <p>Release Date: {release_date}</p>
        <p>Platforms: {platforms}</p>
        <p>Genres: {genres}</p>
        <p>
          <button onClick={handleDeleteGame}>Delete Game</button>

          <button onClick={handleDeleteGame}>Delete Game</button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
