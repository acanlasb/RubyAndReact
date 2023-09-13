import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Games from "../Games";
import HomePage from "../HomePage";
import AddGameForm from "../AddGameForm";
import EditGameForm from "../EditGameForm";

  const API_URL = "/api/v1/games";
  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data);
  }

function Protected(){
  //authentication
    const auth = useContext(AuthContext);
//games display
    const [games, setGames] = useState([]);
    useEffect(() => {
      let mounted = true;
      getAPIDATA().then((items) => {
        if (mounted) {
          setGames(items);
        }
      });
      return () => (mounted = false);
    }, []);

  return (
    <div className="App">
      {/* //    <div className="container"> */}

      <p>Email: {auth.email}</p>
      {/* <p>{JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>has been logged in.</p>}
      {!auth.authenticated && <p>You're not logged in.</p>}
      <HomePage />
      <Games games={games} />
    </div>
  );
};

export default Protected;

//    <div className="container">
    //   <h1>React CRUD App with Hooks</h1>
    //   <div className="row">
    //     <div className="five columns">
    //       <h2>Add user</h2>
    //     </div>
    //     <div className="seven columns">
    //       <h2>View users</h2>
    //     </div>
    //   </div>
    // </div>
