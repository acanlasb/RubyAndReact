import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";

function UpdateGameForm({ id }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    console.log("Updating the game");
    getGames();
  }, []);

  function getGames() {
    fetch(`/api/v1/games/${id}`).then((result) => {
      result.json().then((resp) => {
        setName(resp.name);
        setRelease_date(resp.release_date);
        setPlatforms(resp.platforms);
        setGenres(resp.genres);
      });
    });
  }

  function handleUpGame() {
    let item = { id, name, release_date, platforms, genres };
    console.warn("item", item);
    fetch(`/api/v1/games/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        setNotification(
          "Has been updated and saved successfully. You can now press GO BACK"
        );
      });
    });
  }

  function goBack() {
    navigate("/protected");
  }

  return (
    <div className="UpdateCard">
      <h2>
        UPDATING... <GrUpdate />
      </h2>
      <h2>CLICK ON THE INPUT FIELD BELOW TO EDIT</h2>
      <label htmlFor="title">
        Name
        <MdOutlineGames />
      </label>
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
      <label htmlFor="notes">
        Release Date <MdDateRange />
      </label>
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
      <label htmlFor="description">
        Platforms <GiPlatform />
      </label>
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
      <label htmlFor="rating">
        Genres <BiCategoryAlt />
      </label>
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
      <button className="sml-btn" type="submit" onClick={handleUpGame}>
        Save changes
      </button>{" "}
      <button className="sml-btn" type="submit" onClick={goBack}>
        Go Back
      </button>
      <p>{notification}</p>
    </div>
  );
}

export default UpdateGameForm;
