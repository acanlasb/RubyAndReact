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
      <p onClick={auth.handleLogout}>Logout</p>
      <Link to="/protected"> Protected</Link>
      <p onClick={()=> navigate('/public')}> Navigate to public</p>
    </div>
  );
};

export default Home;
