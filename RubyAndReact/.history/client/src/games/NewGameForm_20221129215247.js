import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-dropdown-select";
import DatePicker from "react-date-picker";
import { GrAdd } from "react-icons/gr";
import { BiRename } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiPlatform } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/ai";

AiFillFileAdd;


const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function NewGameForm({
  onAddGame,
  // gamePlatforms,
  // platformsChange,
  // gameGenres,
  // genresChange,
}) {
  //release date secion
  // const [value, onChange] = useState(new Date());
  //platforms section
//   const options = [
//     { label: "PC:Microsoft Windows", value: "PC:Microsoft Windows" },
//     { label: "PC:MAC", value: "PC:MAC" },
//     { label: "PlayStation 5", value: "PlayStation 5" },
//     { label: "Nintendo Switch", value: "Nintendo Switch" },
//     { label: "Xbox Series X", value: "Xbox Series X" },
//     { label: "Xbox Series S", value: "Xbox Series S" },
//     { label: "PlayStation 4", value: "PlayStation 4" },
//     { label: "Xbox One", value: "Xbox One" },
//     { label: "Android Mobile", value: "Android Mobile" },
//     { label: "iOS", value: "iOS" },
//   ];
// const genresoptions = [
//   //genres section
//   { label: "action", value: "action" },
//   { label: "adventure", value: "adventure" },
//   { label: "castle", value: "castle" },
//   { label: "casual", value: "casual" },
//   { label: "match 3", value: "match 3" },
//   { label: "medieval", value: "medieval" },
//   { label: "mmo", value: "mmo" },
//   { label: "mmorpg", value: "mmorpg" },
//   { label: "multiplayer", value: "multiplayer" },
//
//   { label: "puzzle", value: "puzzle" },
//   { label: "pvp", value: "pvp" },
//
//   { label: "robot", value: "robot" },
//   { label: "rpg", value: "rpg" },
//   { label: "shooters", value: "shooters" },
//   { label: "solitaire", value: "solitaire" },
//   { label: "Strategy", value: "Strategy" },
//   { label: "Survival", value: "Survival" },
//   { label: "War", value: "War" },
//   { label: "Horror", value: "Horror" },
// ];
  //form data section
  const [formData, setFormData] = useState(initialState);
  //has been added notification section
  const notify = () => toast("Has been added! ＼(^o^)／⏳🔧⚙️🕰️⏰");
  //console log to see
  console.log("GameInfo", formData);
  // console.log("Platforms", gamePlatforms);
  // console.log("Release_date", value);
  // console.log("Genres", gameGenres);

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
    <div className="Card">
      <h2>
        Add Some New Game <GrAdd />
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="lbl">
          Name <BiRename />
        </label>
        <br />
        <br />
        <input
          className="gamefield"
          placeholder="TYPE HERE"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="release_date" className="lbl">
          Release Date <BsFillCalendarDateFill />
        </label>
        <br />
        <br />
        <input
          className="gamefield"
          placeholder="TYPE HERE"
          type="text"
          id="release_date"
          value={formData.release_date}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="platforms" className="lbl">
          Platforms <GiPlatform />
        </label>
        <br />
        <br />
        <input
          className="gamefield"
          placeholder="TYPE HERE"
          type="text"
          id="platforms"
          value={formData.platforms}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="genres" className="lbl">
          Genres <BiCategoryAlt />
        </label>
        <br />
        <br />
        <input
          className="gamefield"
          placeholder="TYPE HERE"
          type="text"
          id="genres"
          value={formData.genres}
          onChange={handleChange}
        />
        <br />
        {/* <div>
          <label htmlFor="releasedate" className="lbl">
            Release Date:
          </label>
          <br />
          <DatePicker
            className="gamefield"
            id="release_date"
            onChange={onChange}
            value={value}
            minDate={new Date()}
          />
        </div>
        <div className="dropdown-container">
          <div className="gamefield">
            <label htmlFor="plt">Platforms:</label>
            <Select
              className="gamefield"
              // value={gamePlatforms}
              value={formData.platforms}
              options={options}
              placeholder="CLICK HERE"
              required={true}
              dropdownPosition="bottom"
              color="#ff5c5c"
              onChange={platformsChange}
            />
          </div>
          <div className="gamefield">
            <label htmlFor="plt">Genres:</label>
            <Select
              className="gamefield"
              value={gameGenres}
              options={genresoptions}
              placeholder="CLICK HERE"
              required={true}
              dropdownPosition="bottom"
              className="select"
              color="#ff5c5c"
              onChange={genresChange}
            />
          </div>
        </div> */}
        <br />
        <button className="sml-btn" type="submit" onClick={notify}>
          Add <AiFillFileAdd />
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default NewGameForm;
