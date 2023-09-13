import HomePage from "./HomePage";
import { useContext, useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};
function UpdateGameForm({ onUpdateGame }) {
  const [formData, setFormData] = useState(initialState);
  const params = useParams();
  /*useeffect here*/
  useEffect(()=> {
    getGameInfo();
  },[])

  const getGameInfo = async ()=> {
    console.log(params)
    let result = await fetch("/api/v1/games/${params.id}");
    result = await result.json();
    console.log(result);
    setFormData(result)
  }
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
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
      <br/>
      <button className="sml-btn" type="submit">
        <a href="/protected">Cancel</a>
      </button>
    </div>
  );
}

export default UpdateGameForm;
