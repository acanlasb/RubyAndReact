import React from 'react';

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { id, name, releas_edate, platforms, genres } = game;

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
        <h2>{name}</h2>
        <p>
          <button onClick={handleDeleteGame}>Delete Spice</button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
