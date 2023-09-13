import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
              const [loading, setLoading] = useState(false);
              const [games, setGames] = useState([]);
              const [searchGame, setSearchGame] = useState("");

  return (
    <div className="Card">
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchGame(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        games
          .filter((value) => {
            if (searchGame === "") {
              return value;
            } else if (
              value.games.toLowerCase().includes(searchGame.toLowerCase())
            ) {
              return value;
            }
          })
          .map((game) => <h5 key={game.id}>{game.name}</h5>)
      )}
    </div>
  );
}

export default Search;
