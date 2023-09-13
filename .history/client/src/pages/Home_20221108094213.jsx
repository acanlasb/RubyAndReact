import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Games from '../Games';
function Home (props){

  // const [games, setGames] = useState([]);
  const auth = useContext(AuthContext);

//   useEffect(()=> {
//     getGames()
//   }, [])
//
//   const getGames = async ()=> {
//     try{
//       let res = axios.get("/api/v1/games");
//       setGames(res.data);
//     }catch(err){
//       alert("err in getGames()");
//     }
//   };


    const games = props.games.map((game) => (
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

  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <hr />
      <code>{JSON.stringify(games)}</code>
    </div>
  );
};

export default Home;
