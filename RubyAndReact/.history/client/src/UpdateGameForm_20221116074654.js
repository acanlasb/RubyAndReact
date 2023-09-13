import HomePage from "./HomePage";
import { useEffect, useState } from "react";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm() {
const [name, setName] = useState("");
const [releasedate, setReleasedate] = useState("");
const [platforms, setPlatforms] = useState("");
const [genres, setGenres] = useState("");

useEffect(() => {
}, [])

function updategame(){
  let item
  console.wanr()
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
        onChange={(e) => {setName(e.target.value)}}
      />
      <br />
      <label htmlFor="notes">Release Date:</label>
      <br />
      <input
        type="text"
        id="release_date"
        value={releasedate}
        onChange={(e) => {setReleasedate(e.target.value)}}
      />
      <br />
      <label htmlFor="description">Platforms: </label>
      <br />
      <input
        type="text"
        id="platforms"
        value={platforms}
        onChange={(e) => {setPlatforms(e.target.value)}}
      />
      <br />
      <label htmlFor="rating">Genres: </label>
      <br />
      <input
        type="text"
        id="genres"
        value={genres}
        onChange={(e) => {setGenres(e.target.value)}}
      />
      <br />
      <br />
      <button className="sml-btn" type="submit" onClick={updategame}>
        Save changes
      </button>
      <br />
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;
