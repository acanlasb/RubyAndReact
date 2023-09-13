import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Games from '../Games';
function Home (){

  const [games, setGames] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(()=> {
    getGames()
  }, [])

  const getGames = async ()=> {
    try{
      let res = axios.get("/api/v1/games");
      setGames(res.data);
    }catch(err){
      alert("err in getGames()");
    }
  };

  const sample = () => {
    if(games.length){
      const index = Math.floor(Math.floor()*cats.length
    }
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
      <hr />
      {/* games array data should show here. need to edit it later */}
      <code>{JSON.stringify(games)}</code>
    </div>
  );
};

export default Home;
