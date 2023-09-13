import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Games from "../Games";
function Home() {
  const [games, setGames] = useState([]);
  const auth = useContext(AuthContext);
  const [sample, setSample] = useState([]);

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
  const renderGame = () => {
    let game = sample ();
    const sample = () => {
      if (!game) {
        return <p> no game found</p>;
      }
      return (
        <div>
<h1>{game.name}</h1>
        </div>
      );
    };
  };

  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <hr />
      {/* games array data should show here. need to edit it later */}
      <code>{JSON.stringify(sample())}</code>
    </div>
  );
}

export default Home;
