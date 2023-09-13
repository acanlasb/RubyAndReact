import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

function AuthProvider(props) {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [apidata, setApidata] = useState();


  const handleRegister = async (user, navigate) => {
    try {
      const res = await axios.post("api/auth", user);
      console.log("res:", user);
      setUser(res.data.data);
      alert("You're now signed up.");
      navigate("/protected");
    } catch (error) {
      console.log(error.response);
      alert("Sorry. There was an error.");
    }
  };
  const handleLogin = async (user, navigate) => {
    try {
      const res = await axios.post("api/auth/sign_in", user);
      console.log("res:", user);
      setUser(res.data.data);
      alert("You're now signed in!");
      navigate("/protected");
      const headers = res.headers;
      axios.defaults.headers.common["access"] = headers["access-tokens"];
      axios.defaults.headers.common["token-type"] = headers["token-type"];
      axios.defaults.headers.common["client"] = headers["client"];
      axios.defaults.headers.common["expiry"] = headers["expiry"];
      axios.defaults.headers.common["uid"] = headers["uid"];
    } catch (err) {
      console.log(err.response);
      alert("error occured");
    }
  };

  const handleLogout = async (navigate) => {
    try {
      // "api/auth/sign_out"
      const res = await axios.delete("api/auth/sign_out");
      console.log(res);
      localStorage.removeItem("access-token");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err.response);
      alert("error occured");
    }
  };

  return (
    <ErrorBoundary>
      <AuthContext.Provider
        value={{
          ...user,
          handleRegister,
          handleLogin,
          handleLogout,
          setUser,
          authenticated: user !== null,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default AuthProvider;
