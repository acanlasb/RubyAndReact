import { useState } from "react";

const initialState = {
name: "",
releasedate: "",
platforms: "",
genres: "",
};

function NewGameForm({ onAddGame }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

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
        onAddGame(newGame);
      });
  }

  return (
    <div className="card">
      <h2>New Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="notes">Tasting Notes: </label>
        <input
          type="text"
          id="notes"
          value={formData.releasedate}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={formData.platforms}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          max="5"
          value={formData.genres}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewGameForm;
