import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function GamesForm({ user }) {
  const [name, setName] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenre] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {

      const [game, setGame] = useState({
        name: "",
        releasedate: "",
        platforms: "",
        genres: "",
      });

        const [formErrors, setFormErrors] = useState({});
const handleInputChange = (e) => {
  const { target } = e;
  const { name } = target;
  const value = target.type === "checkbox" ? target.checked : target.value;

  setEvent({ ...game, [name]: value });
};

  const validateEvent = () => {
    const errors = {};

    if (game.name === "") {
      errors.name = "Please enter a game name";
    }

    if (game.releasedate === "") {
      errors.releasedate = "Please enter a game release date";
    }


    if (game.platforms === "") {
      errors.platforms = "Please the game platforms";
    }


    if (game.genres === "") {
      errors.genres = "Please enter the game genres";
    }


    return errors;
  };

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>The following errors prohibited the event from being saved:</h3>
        <ul>
          {Object.values(formErrors).map((formError) => (
            <li key={formError}>{formError}</li>
          ))}
        </ul>
      </div>
    );
  };



    e.preventDefault();
    setIsLoading(true);
    fetch("/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, releasedate, platforms, genres }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/protected");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    console.log({name, releasedate, platforms, genres});
  }

  return (
    <div className="App">
      <h1>ADDING A NEW GAME ON THE LIST.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="name">Release Date</label>
        <br />
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={releasedate}
          onChange={(e) => setReleasedate(e.target.value)}
        />
        <br />
        <label htmlFor="name">Platforms</label>
        <br />
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={platforms}
          onChange={(e) => setPlatforms(e.target.value)}
        />
        <br />
        <label htmlFor="name">Genres</label>
        <br />
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={genres}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <br />
        <button color="primary" type="submit">
          Add this to the list
        </button>
        <br />
        <br />
        <button onClick={() => navigate("/protected")}>Cancel</button>
      </form>
    </div>
  );
}

export default GamesForm;
