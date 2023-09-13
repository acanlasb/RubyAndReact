import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Games from "./Games";
import GamesForm from "./GamesForm";
import Home from "./pages/Home";
import AuthProvider from "./providers/AuthProvider";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import { initMiddleware } from "devise-axios";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";


initMiddleware();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <h1>Video Game Database</h1>
        <h3>Please Sign up or Sign in to access the video game database</h3>

        {/* <Link to="homepage">Homepage</Link>
        {""} */}
        <Link to="signup">Sign Up</Link>
        {""}
        <Link to="login">Login</Link>
        {""}
        {/* <Link to="home">Logout</Link> */}
        {/* {""} */}
        {/* <Link to="protected">Protected</Link>
        {""} */}
        <Link to="public">Public</Link>
      </div>
    ),
  },
  {
    path: "homepage",
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },
  {
    path: "signup",
    element: (
      <div>
        <SignUpForm />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <LoginForm />
      </div>
    ),
  },
  {
    path: "protected",
    element: (
      <div>
        <Protected />
      </div>
    ),
  },
  {
    path: "public",
    element: (
      <div>
        <Public />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
