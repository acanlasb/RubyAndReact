import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Games from "../Games";
function Home() {
  const [games, setGames] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      let res = axios.get("/api/v1/games");
      setGames(res.data);
    } catch (err) {
      alert("err in getGames()");
    }
  };

  const sample = games.map(() => (
    <div key={game.id}>
      <br />
      <h2>{game.name}</h2>
      <br />
      <p>Release Date: {game.release_date}</p>
      <p>Platforms: {game.platforms}</p>
      <p>Genre: {game.genre}</p>
      <br />
      <hr />
    </div>
  ));

  const upVote = (id) =>{
    console.log(id);
  }

  const downVote = (id) =>{
    console.log(id);
  }
  const renderGame = () => {
    let game = sample();
    if (!game){
      return <p> No game found</p>;
    }
    return(
      <div>
        <h1>{game.name}</h1>
        </div>
    );
    };


  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <hr />
      {/* games array data should show here. need to edit it later */}
      {renderGame()}
      <button onClick={() => upVote(game.id)}> Like</button>
      <button onClick={() => downVote(game.id)}>Nope</button>
    </div>
  );
}

export default Home;
