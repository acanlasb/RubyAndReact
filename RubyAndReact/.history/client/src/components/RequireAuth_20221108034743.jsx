import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RequireAuth = () => {
  const auth = useContext(AuthContext);
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  useEffect(()=>{
    checkAuthStatus();
  });

  const checkAuthStatus = ()=>{
    if(auth.authenticated || !localStorage.get("access-token")){
      setCheckingAuthStatus(false);
      return;
    }
  };
  if(checkingAuth)

  if (!auth.authenticated) {
    return <Navigate to="/" />;
  }
  return;
  <div className="App">
    <h1> hello {auth.email}authenticated</h1>
    <Outlet />
  </div>;
};

export default RequireAuth;
