import React from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Games(props) {
  return (
    <Container fluid>
      <div className="App-Games">
        <h1 className="App-Title">Upcoming Games</h1>
        {props.games.map((game) => {
          return (
            <Row>
              <div key={game.id}>
                <hr />
                <Col>
                  <h2>{game.name}</h2>
                </Col>
                <br />
                <Col>
                  <p>Release Date: {game.release_date}</p>
                </Col>
                <Col>
                  <p>Platforms: {game.platforms}</p>
                </Col>
                <Col>
                  <p>Genre: {game.genre}</p>
                </Col>
                <hr />
              </div>
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

export default Games;
