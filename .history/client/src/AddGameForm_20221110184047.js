import React, { useState } from "react";
import Protected from "./pages/Protected.jsx"

const AddGameForm = (props) => {
  const initGame = { id: null, name: "", releasedate: "", platforms:"", genres:"" };
// returns the initial state value of const. above
  const [game, setGame] = useState(initGame);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game.name && game.releasedate, game.platforms, game.genres) {
      handleChange(e, props.addGame(game));
    }
  };

  return (
    <div className="App">
      <form>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={game.name}
          name="name"
          onChange={handleChange}
        />
        <label>Release Date</label>
        <input
          className="u-full-width"
          type="text"
          value={game.releasedate}
          name="releasedate"
          onChange={handleChange}
        />
        <label>Platforms</label>
        <input
          className="u-full-width"
          type="text"
          value={game.releasedate}
          name="platform"
          onChange={handleChange}
        />
        <label>Genres</label>
        <input
          className="u-full-width"
          type="text"
          value={game.genres}
          name="genres"
          onChange={handleChange}
        />
        <button className="button-primary" type="submit" onClick={handleSubmit}>
          Add user
        </button>
        <button className="button-primary" type="submit" onClick={handleSubmit}>  <a href="/protected" className="Add">
          Cancel
          </a>
        </button>
      </form>
    </div>
  );
};

export default AddGameForm;
