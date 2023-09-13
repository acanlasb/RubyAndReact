import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import GameItem from "./GameItem";
import NewGameForm from "./NewGameForm";

function Games(props) {
  const games = props.games.map((game) => (
    <div key={game.id}>
      <br />
      <h2>{game.name}</h2>
      <br />
      <p>Release Date: {game.release_date}</p>
      <p>Platforms: {game.platforms}</p>
      <p>Genres: {game.genres}</p>
      <br />
      <hr />
    </div>
  ));

    const { id, name, release_date, platforms, genres } = game;

    function handleDeleteGame() {
      fetch(`/api/v1/games/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteGame(game);
        }
      });
    }
    
  return (
    <Container fluid>
      <div className="App-Games">
        <h1 className="App-Title">Upcoming Games</h1>
        {games}
        <p>
          <button onClick={handleDeleteGame}>Delete Game</button>
        </p>
      </div>
    </Container>
  );
}

export default Games;
