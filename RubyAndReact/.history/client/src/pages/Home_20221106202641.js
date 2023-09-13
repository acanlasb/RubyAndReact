import { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Home</h1>
      <p>{JSON.stringify(auth)}</p>
      <button onClick={auth.handleLogin}>Login</button>
      <br
      <button onClick={auth.handleLogin}>Login</button>
      <br />
      <button onClick={auth.handleLogout}>Logout</button>
      <br />
      <Link to="/protected"> Protected</Link>
      <br />
      <button onClick={() => navigate("/public")}> Navigate to public</button>
    </div>
  );
};

export default Home;
