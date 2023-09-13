import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Protected from "./Protected";
import { initMiddleware } from "devise-axios";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NewGameForm from "./NewGameForm";
import UpdateGameForm from "./UpdateGameForm";

initMiddleware();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <h1>Video Game Database</h1>
          <h3>Sign up or Login to access the video game database</h3>
          <br />
          <button className="cybr-btn">
            <Link to="signup">
              Sign<span aria-hidden> Up</span>
              <span aria-hidden className="cybr-btn__glitch">
                Sign Up Sign Up Sign Up
              </span>
            </Link>
          </button>
          <br />
          <br />
          <button className="cybr-btn">
            <Link to="login">
              Login<span aria-hidden> Here</span>
              <span aria-hidden className="cybr-btn__glitch">
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
  {
    path: "updategameform",
    element: (
      <div>
        <UpdateGameForm />
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
