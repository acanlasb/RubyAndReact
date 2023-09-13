import HomePage from "./HomePage";
import { useEffect, useState } from "react";
import Protected from "./Protected";

function UpdateGameForm() {
  // const [name, setName] = useState("");
  // const [release_date, setRelease_date] = useState("");
  // const [platforms, setPlatforms] = useState("");
  // const [genres, setGenres] = useState("");
  // const [cancel, setCancel] = useState(false);

  function updategame() {
    let item = { name, release_date, platforms, genres };
    console.warn(item);
    fetch(`/api/v1/games`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    }).then((result) => {
      result.json().then((response) => {
        console.warn(response);
        alert("Game updated successfully.");
      });
    });
  }

  return (
    <div className="UpdateCard">
      <h2>Updating the Game</h2>
      <label htmlFor="title">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input
        type="text"
        id="release_date"
        value={release_date}
        onChange={(e) => {
          setRelease_date(e.target.value);
        }}
      />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input
        type="text"
        id="platforms"
        value={platforms}
        onChange={(e) => {
          setPlatforms(e.target.value);
        }}
      />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input
        type="text"
        id="genres"
        value={genres}
        onChange={(e) => {
          setGenres(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="sml-btn" type="submit" onClick={updategame}>
        Save changes
      </button>
      <br />
      <div className="conditional">
        {cancel ? (
          <Protected />
        ) : (
        <button className="sml-btn" type="submit" onClick={handlecancel}>
        Cancel
      </button>
      </div>
    </div>
  );
}

export default UpdateGameForm;
