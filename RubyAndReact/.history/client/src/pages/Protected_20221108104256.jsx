import {useContext} from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
const Protected = () => {
  const auth = useContext(AuthContext);
    const [games, setGames] = useState([]);

  return (
    <div className="App">
      <h1>Protected</h1>
      <p>Email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not be here</p>}
      <p onClick={auth.handleLogout}>Logout</p>

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

      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Protected;
