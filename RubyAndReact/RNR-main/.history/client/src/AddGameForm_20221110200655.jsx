import React, {useState} from 'react';
const AddGameForm = (props) => {
      const initGame = {id: null, name: '', release_date: '', platforms: '', genres: ''};
          const [game, setGame] = useState(initGame);
              const handleChange = e => {
        const {name, value} = e.target;
        setGame({...game, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (game.name && game.release_date && game.platforms && game.genres) {
            handleChange(e, props.addGame(game));
        }
    }

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
          value={game.release_date}
          name="release_date"
          onChange={handleChange}
        />
        <label>Platforms</label>
        <input
          className="u-full-width"
          type="text"
          value={game.platforms}
          name="platforms"
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
          Add Game
        </button>
      </form>
    </div>
  );
}

export default AddGameForm;
