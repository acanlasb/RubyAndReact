import React, { useState } from "react";

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
      <label>Username</label>
      <input
        className="u-full-width"
        type="text"
        value={game.username}
        name="username"
        onChange={handleChange}
      />
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add user
      </button>
    </form>
    </div>
  );
};

export default AddGameForm;
