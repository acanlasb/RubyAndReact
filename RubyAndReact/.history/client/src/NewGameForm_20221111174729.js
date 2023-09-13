import { useState } from "react";
import { useNavigate } from "react-router-dom";


const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function NewGameForm({ onAddGame }) {
  const navigate = useNavigate();

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
        alert("Game has been added");
        navigate("/protected");
      });
  }

  return (
    <div className="card">
      <h2>Add Some New Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="notes">Release Date:</label>
        <input
          type="text"
          id="release_date"
          value={formData.release_date}
          onChange={handleChange}
        />
        <label htmlFor="description">Platforms: </label>
        <input
          type="text"
          id="platforms"
          value={formData.platforms}
          onChange={handleChange}
        />
        <label htmlFor="rating">Genres: </label>
        <input
          type="text"
          id="genres"
          value={formData.genres}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewGameForm;
