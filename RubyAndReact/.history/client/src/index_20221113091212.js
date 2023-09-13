import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Games from "./Games";
import AuthProvider from "./AuthProvider";
import Protected from "./Protected";
import { initMiddleware } from "devise-axios";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NewGameForm from "./NewGameForm";

initMiddleware();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <h1>Video Game Database</h1>
          <h3>Sign up or Sign in to access the video game database</h3>
          <br />
          <button class="cybr-btn">
            <Link to="signup">
              Sign<span aria-hidden> Up</span>
              <span aria-hidden class="cybr-btn__glitch">
                Sign Up Sign Up Sign Up
              </span>
            </Link>
          </button>
          <br />
          <br />
          <button class="cybr-btn">
            <Link to="login">
              Login<span aria-hidden> Here</span>
              <span aria-hidden class="cybr-btn__glitch">
                Login Login Login
              </span>
            </Link>
          </button>
        </div>
      </>
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
    path: "newgameform",
    element: (
      <div>
        <NewGameForm />
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
