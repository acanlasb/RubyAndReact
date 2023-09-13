import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
