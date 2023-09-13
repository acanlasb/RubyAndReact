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

  const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/update-student/" +
		props.match.params.id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

          return (  <div>hello</div>);
}

export default UpdateGameForm;


