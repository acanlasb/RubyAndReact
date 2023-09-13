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

  function handleUpdateGame(game){
    fetch(`/api/v1/games/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateFruit(fruit)
      })
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
          <button onClick={handleUpdateGame}>Delete Game</button>

          <button onClick={handleDeleteGame}>Delete Game</button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
