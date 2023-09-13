import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RequireAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth.authenticated) {
    return <Navigate to="/" />;
  }
  return;
  <div className="App">
    <h1> heelo {auth.email}. authenticated</h1>
    <Outlet />
  </div>;
};

export default RequireAuth;
