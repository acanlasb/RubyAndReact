import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = (props) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleRegister = async (user, navigate) => {
    try {
      let res = await axios.post("api/auth", user);
      console.log("res:", user);
      setUser(res.data.data);
      // navigate("/protected");
    } catch (err) {
      console.log(err.response);
      alert("error occured");
    }
  };
  const handleLogin = async () => {
        try {
          let res = await axios.post("api/auth/sign_in", user);
          setUser(res.data.data);
          let headers = res.headers;
          
          // navigate("/protected");
        } catch (err) {
          console.log(err.response);
          alert("error occured");
        }
  };

  const handleLogout = async () => {
    setUser(null);
    console.log("Logout");
  };

  return (
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
  );
};

export default AuthProvider;
