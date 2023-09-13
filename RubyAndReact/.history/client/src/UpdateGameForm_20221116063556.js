import HomePage from "./HomePage";
import { useContext, useEffect, useState } from "react";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm() {
const [name, setName] = useState("")
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/api/v1/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((newGame) => {
          setFormData(initialState);
          alert("Game has been added successfully");
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
        value={formData.name}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input type="text" id="release_date" value={formData.release_date} />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input type="text" id="platforms" value={formData.platforms} />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input type="text" id="genres" value={formData.genres} />
      <br />
      <br />
      <button className="sml-btn" type="submit">
        Save
      </button>
      <br />
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;
