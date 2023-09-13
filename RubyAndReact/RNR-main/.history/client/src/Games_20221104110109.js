import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Games(props) {
  const games = props.games.map((game) => (
    <div key={game.id}>
      <
      <h2>{game.name}</h2>
      <p>Release Date: {game.release_date}</p>
      <p>Platforms: {game.platforms}</p>
      <p>Genre: {game.genre}</p>
    </div>
  ));
  return (
    <Container fluid>
      <div className="App-Games">
        <h1 className="App-Title">Upcoming Games</h1>
        {games}
      </div>
    </Container>
  );
}

export default Games;
