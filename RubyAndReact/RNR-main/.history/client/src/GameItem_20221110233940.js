import React from 'react';

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const { name, releasedate, platforms, genres } = game;

  function handleDeleteSpice() {
    fetch(`//${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteSpice(spice);
      }
    });
  }

  return (
    <div className="spice-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Tasting Notes: <em>{notes}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteSpice}>Delete Spice</button>
        </p>
      </div>
    </div>
  );
}

export default SpiceItem;
