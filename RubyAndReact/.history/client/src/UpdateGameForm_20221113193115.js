import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function UpdateGameForm() {
          const updateAPIData = () => {
            axios.put(
              `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`,
              {
                firstName,
                lastName,
                checkbox,
              }
            );
          };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
     <div className="Card">
      <h2>Update Game</h2>
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
        <button class="sml-btn" type="submit">
          Add
        </button>
      </form>
    </div>
    </div>
  );
}
