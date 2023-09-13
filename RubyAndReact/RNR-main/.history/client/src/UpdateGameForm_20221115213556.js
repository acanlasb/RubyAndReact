import HomePage from "./HomePage";
import { useContext, useEffect, useState } from "react";


const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm({ onUpdateGame }) {

  const [formData, setFormData] = useState(initialState);
    const [games, setGames] = useState([]);


  /*useeffect here*/
useEffect(()=>{
  
})
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/v1/games/${id}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newGame) => {
        setFormData(initialState);
        alert("Game has been updated successfully");
        onUpdateGame(newGame);
      });
  }

  return (
    <div className="UpdateCard">
      <h2>Updating the Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="notes">Release Date:</label>
        <br />
        <input
          type="text"
          id="release_date"
          value={formData.release_date}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Platforms: </label>
        <br />
        <input
          type="text"
          id="platforms"
          value={formData.platforms}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="rating">Genres: </label>
        <br />
        <input
          type="text"
          id="genres"
          value={formData.genres}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="sml-btn" type="submit">
          Save
        </button>
      </form>
      <br/>
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;
