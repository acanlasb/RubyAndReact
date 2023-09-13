import React from "react";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import RequireAuth from "./components/RequireAuth";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import {useNavigate, Navigate} from "react";

function App() {
  const navigate = useNavigate();
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
      <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/protected" element={<Protected />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
