import {useContext} from 'react';
import 
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Protected</h1>
      <p>Email: {auth.email}</p>
      <p>{auth.authenticated && <p>is logged in</p>}</p>
    </div>
  );
};

export default Protected;
