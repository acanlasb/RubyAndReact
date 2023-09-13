import React from "react";
import { Redirect } from "react-router-dom";
import React, { PureComponent } from 'react';
import {useState} from 'react-router-dom';


function CreateGame(props){
const [ name, setName] = useState("");
const [ releasedate, setReleasedate] = useState("");
const [ genres, setGenres] = useState("");
const [ platforms, setPlatforms] = useState("");

  const handleInputChange = e => {
          setName(e.target.value);
          setReleasedate(e.target.value);
          setGenres(e.target.value);
          setPlatforms(e.target.value);
  };

  const createGameRequest = event => {
    console.log(name);
    console.log(releasedate);
    console.log(genres);
    console.log(platforms);
    fetch("/api/v1/games", {
      method: "post",
      let Data = {
          
      }
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      alert("Post created successfully");
      location.href = "/";
    });
  };

  render() {
    const { title, description, is_published } = this.state;
    return (
      <div>
        <h3>New Post</h3>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Is Published: </label>
          <input
            type="text"
            name="is_published"
            value={is_published}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.createPostRequest}>Create</button>
      </div>
    );
  }
}
export default CreateGame;
