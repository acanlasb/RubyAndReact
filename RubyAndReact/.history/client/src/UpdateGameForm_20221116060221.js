import HomePage from "./HomePage";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm() {

  return (
    <div className="UpdateCard">
      <h2>Updating the Game</h2>
      <label htmlFor="title">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        // value={}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input
        type="text"
        id="release_date"
        // value={}

      />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input
        type="text"
        id="platforms"
        // value={}
      />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input
        type="text"
        id="genres"
        // value={}
      />
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
