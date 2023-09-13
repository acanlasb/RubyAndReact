import { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  release_date: "",
  platforms: "",
  genres: "",
};

function UpdateGameForm({ onEditGame }) {

  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

    function handleSubmit(gameO) {
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


          return (  <div>hello</div>);
}

export default UpdateGameForm;
