import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Games from "../Games";
function Home() {
  const [games, setGames] = useState([]);
  const auth = useContext(AuthContext);
  const [game, setGame] = useState("");

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

//   const sample = () => {
//     if (games.length){
//       const index = Math.floor(games.random()* games.length);
//       return games[index];
//     }
//     return null;
//   };
//
//   const upVote = (id) =>{
//     console.log(id);
//   }
//
//   const downVote = (id) =>{
//     console.log(id);
//     const filteredGames = games.filter(game => game.id !==id);
//     setGames(filteredGames);
//   }
//
//
//   const renderGame = () => {
//     let game = sample();
//     if (!game){
//       return <p> No game found</p>;
//     }
//     return(
//       <div>
//
//         <h1>{game.name}</h1>
//         </div>
//     );
//     };


  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <hr />
      {/* games array data should show here. need to edit it later */}
      {/* {renderGame()} */}
      {/* <button onClick={() => upVote(game.id)}> Like</button>
      <button onClick={() => downVote(game.id)}>Nope</button> */}
    </div>
  );
}

export default Home;
