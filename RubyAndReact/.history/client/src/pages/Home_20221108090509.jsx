import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Home = () => {
  const auth = useContext(AuthContext);
  useEffect(()=> {
    try{
      
    }
  }, [])
  return (
    <div className="App">
      <h1>Home</h1>
      <code>{JSON.stringify(auth)}</code>
    </div>
  );
};

export default Home;
