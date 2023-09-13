import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const RequireAuth = async () => {
  const auth = useContext(AuthContext);
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  useEffect(()=>{
    checkAuthStatus();
  },[]);

  const checkAuthStatus = async ()=>{
        if (auth.authenticated || !localStorage.getItem("access-token")) {
          setCheckingAuthStatus(false);
          console.log
          return;
        }
    try {
      const res = await axios.get("/api/auth/validate_token");
      auth.setUser(res.data.data);
      console.log("token valid");
    } catch (err){
      console.log('token not valid')
    } finally {
      setCheckingAuthStatus(false);
    }
  };

  if(checkingAuthStatus){
    return<p> Checking if logged in or not</p>;
  }

  if (!auth.authenticated) {
    return <Navigate to="/home" />;
  }
  return;
  <div className="App">
    <h1> hello {auth.email}authenticated</h1>
    <Outlet />
  </div>;
};

export default RequireAuth;
