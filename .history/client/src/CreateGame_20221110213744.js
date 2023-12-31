import React from "react";
import { Redirect } from "react-router-dom";
import React, { PureComponent } from 'react';


function CreateGame{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      is_published: true,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createPostRequest = (event) => {
    console.log("this.state", this.state);
    fetch("/api/v1/posts", {
      method: "post",
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
export default CreateGame
