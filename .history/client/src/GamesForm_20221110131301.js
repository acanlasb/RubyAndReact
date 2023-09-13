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
        event_type: "",
        event_date: "",
        title: "",
        speaker: "",
        host: "",
        published: false,
      });

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
