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

          return (  <div>hello</div>);
}

export default UpdateGameForm;
