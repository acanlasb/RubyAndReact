import React from "react";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import Layout from "./pages/Layout";

function App() {
//    const [user, setUser] = useState(null);
//    const [isAuth, setIsAuth] = useState(false);
//
//    useEffect(() => {
//      // auto-login
//      fetch("/me").then((r) => {
//        if (r.ok) {
//          r.json().then((user) => {
//            setUser(user);
//            setIsAuth(true);
//          });
//        }
//      });
//    }, []);
//
//    if (!isAuth) {
//      return (
//        </div>
//      );
//    }
  return (
    <div className="App">
      {/* <NavBar />
      <HomePage /> */}
      <Home/>
      <Protected/>
      <Public/>
    </div>
  );
}

export default App;
