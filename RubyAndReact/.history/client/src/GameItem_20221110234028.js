import React from 'react';

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { name, releasedate, platforms, genres } = game;

  function handleDeleteSpice() {
    fetch(`/api/v1/games/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteSpice(game);
      }
    });
  }

  return (
    <div className="spice-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Tasting Notes: <em>{notes}</em>
        </p>
        <p>
          <button onClick={handleDeleteSpice}>Delete Spice</button>
        </p>
      </div>
    </div>
  );
}

export default SpiceItem;
