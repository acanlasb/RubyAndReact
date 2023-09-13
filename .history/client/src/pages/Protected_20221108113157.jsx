import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Protected = () => {
  const auth = useContext(AuthContext);
//     const [games, setGames] = useState([]);
//
//   useEffect(() => {
//     getGames();
//   }, []);
//
//   const getGames = async () => {
//     try {
//       let res = axios.get("/api/v1/games");
//       setGames(res.data);
//     } catch (err) {
//       alert("err in getGames()");
//     }
//   };

  return (
    <div className="App">
      <h1>Protected</h1>
      <p>Email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not be here</p>}
      <a href= "/" onClick={auth.handleLogout}>Logout</a>

      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Protected;
