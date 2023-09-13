//packages
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initMiddleware } from "devise-axios";
import { Link } from "react-router-dom";

//files
import Protected from "./pages/Protected";
import HomePage from "./pages/HomePage";
import SignUpForm from "./auth/SignUpForm";
import LoginForm from "./auth/LoginForm";
import NewGameForm from "./games/NewGameForm";
import UpdateGameForm from "./games/UpdateGameForm";
import AuthProvider from "./auth/AuthProvider";
import ErrorBoundary from "./auth/ErrorBoundary";

initMiddleware();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <h1 className="Title">Video Game Database</h1>
          <h3 className="Desc">
            Sign up or Login to access the video game database
          </h3>
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
  <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
    </AuthProvider>
);
