import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function GamesForm({ user }) {
  const [name, setName] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, releasedate, platforms, genres}),
    }).then((r) => {
      if (r.ok) {
        navigate("/protected");
      } else {
        r.json().then();
      }
    });
    console.log({name, releasedate, platforms, genres});
  }

  return (
    <div className="App">
      <h1>ADDING A NEW GAME ON THE LIST.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />s
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
          onChange={(e) => setGenres(e.target.value)}
        />
        <br />
        <br />
        <button color="primary" type="submit">
          Add this to the list
        </button>
        <br />
        <br />
        <button onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default GamesForm;
