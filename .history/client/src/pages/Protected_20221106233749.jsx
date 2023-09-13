import {useContext} from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Protected</h1>
      <p>Email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not be here</p>}
      <p>
        <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Protected;
