import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
            useEffect(() => {
              fetch("/api/v1/games")
                .then((r) => r.json())
                .then(setGames);
            }, []);
  return (
    <div className="Search">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
}

export default Search;
