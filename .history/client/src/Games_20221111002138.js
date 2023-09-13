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

        function handleUpdateGame(updatedGame) {
          setGames((games) =>
            games.map((game) => {
              return game.id === updatedGame.id ? updatedGame : game;
            })
          );
        }

        function handleDeleteGame(deletedGame) {
          setGames((game) =>
            games.filter((game) => game.id !== deletedGame.id)
          );
        }


  return (
    <Container fluid>
      <div className="App-Games">
        <h1 className="App-Title">Upcoming Games</h1>
        {games}
        <section className="game-list">
          {games.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              onUpdateSpice={handleUpdateGame}
              onDeleteSpice={handleDeleteGame}
            />
          ))}
        </section>
      </div>
    </Container>
  );
}

export default Games;
