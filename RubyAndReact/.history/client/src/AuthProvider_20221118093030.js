import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [apidata, setApidata] = useState();

  const handleRegister = async (user, navigate) => {
    try {
      let res = await axios.post("api/auth", user);
      console.log("res:", user);
      setUser(res.data.data);
      navigate("/protected");
    } catch (e) {
      console.log(e);
      alert("Sorry. There was an error. Could be");
    }
  };
  const handleLogin = async (user, navigate) => {
    try {
      let res = await axios.post("api/auth/sign_in", user);
      console.log("res:", user);
      setUser(res.data.data);
      navigate("/protected");
      let headers = res.headers;
      axios.defaults.headers.common["access"] = headers["access-tokens"];
      axios.defaults.headers.common["token-type"] = headers["token-type"];
      axios.defaults.headers.common["client"] = headers["client"];
      axios.defaults.headers.common["expiry"] = headers["expiry"];
      axios.defaults.headers.common["uid"] = headers["uid"];
    } catch (e) {
      console.log(e);
      alert("error occured");
    }
  };

  const handleLogout = () => {
    fetch("/api/auth/sign_out", { method: "DELETE" }).then((r) => {
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
//note
// Using Context to Keep Track of User Authentication Status. If your application uses authentication, many of its
// components will need to know the current user's authentication state. Passing down the authentication status to
// each component is redundant and leads to prop drilling so using context is a good option
//https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10
