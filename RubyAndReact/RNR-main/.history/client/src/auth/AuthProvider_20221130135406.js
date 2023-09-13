import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, navigate) => {
    try {
      let res = await axios.post("signup", user);
      console.log("res:", user);
      setUser(res.data.data);
      alert("SIGNINGUP... PRESS OK");
      navigate("/protected");
    } catch (e) {
      console.log(e);
      alert("Sorry. There was an error.");
    }
  };
  const handleLogin = async (user, navigate) => {
    try {
      let res = await axios.post("login", user);
      console.log("res:", user);
      setUser(res.data.data);
      alert("You're now signed in!");
      navigate("/protected");
    } catch (e) {
      console.log(e);
      alert("error occured");
    }
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
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
