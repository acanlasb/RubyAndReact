import React from "react";
import axios from "axios";
import { useState } from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user) => {
    try{
    let res = await axios.post("api/auth", user);
    console.log("res", user);
    } catch (err){
      alert('error occured');
    }
  };
  const handleLogin = async () => {
    setUser({email:"Phones@gmail.com"})
    console.log("Login");
  };
  const handleLogout = async () => {
        setUser(null);
    console.log("Logout");
  };

  return <AuthContext.Provider value={{
          ...user,
          handleRegister,
          handleLogin,
          handleLogout,
          setUser,
          authenticated: user !==null,
  }}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
