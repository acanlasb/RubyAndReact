import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Search() {
            useEffect(() => {
              fetch("/api/v1/games")
                .then((r) => r.json())
                .then(setGames);
            }, []);
  return <div className="Search">search</div>;
}

export default Search;
