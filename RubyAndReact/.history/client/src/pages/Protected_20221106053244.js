import {useContext} from 'react';
import { AuthContext } from "../providers/AuthProvider";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Protected</h1>
      <p>Email: {auth.email}</p>
      {auth.authenticated && <p>is logged in</p>}
      {auth.authenticated && <p>is logged in</p>}
    </div>
  );
};

export default Protected;
