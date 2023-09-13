import React, { useState } from "react";

const AddGameForm = (props) => {
  const initGame = { id: null, name: "", releasedate: "", platforms:"", genres:"" };
// returns the initial state value of const. above
  const [game, setGame] = useState(initGame);

  const handleChange = (e) => {
    const { name, releasedate, platforms, genres } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, props.addUser(user));
    }
  };

  return (
          <div className="App">
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        className="u-full-width"
        type="text"
        value={user.username}
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
