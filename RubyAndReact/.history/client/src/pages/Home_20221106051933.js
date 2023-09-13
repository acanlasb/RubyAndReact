import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Home = () => {
  const auth = useContext(AuthContext);
  auth.handleRegister();
  auth.handleLogin();
  auth.handleLogin();
  return (
    <div className="App">
      <h1>Home</h1>
      <p>{JSON.stringify(auth)}</p>
      <p></p>
    </div>
  );
};

export default Home;
