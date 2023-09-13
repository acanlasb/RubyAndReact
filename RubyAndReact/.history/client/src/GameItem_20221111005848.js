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

    const [udgames, setUdgames] = useState([]);
    function handleUpdateGame(updatedGame) {
      setUdgames((udgames) =>
        udgames.map((game) => {
          return game.id === updatedGame.id ? updatedGame : game;
        })
      );
    }

    function handleDeleteGame(deletedGame) {
      setUdgames((game) =>
        udgames.filter((game) => game.id !== deletedGame.id)
      );
    }

  return (
    <div className="spice-item card">
      <div className="details">
        <h2>{name}</h2>
        <p>
          <button onClick={handleUpdateGame}>Update Game</button>

          <button onClick={handleDeleteGame}>Delete Game</button>
        </p>
      </div>
    </div>
  );
}

export default GameItem;
