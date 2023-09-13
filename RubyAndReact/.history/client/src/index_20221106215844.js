import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Games from "./Games";
import GamesForm from "./GamesForm";
import Home from "./pages/Home";
import AuthProvider from "./providers/AuthProvider";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {initMiddleware} from "devise-axios";
import { createRoot } from "react-dom/client";
import {
  Link
} from "react-router-dom";

initMiddleware();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Video Game Database</h1>
        <Link to="home">Home</Link>
        <Link to="protected">Home</Link>
        <Link to="public">Home</Link>
      </div>
    ),
  },
  {
    path: "home",
    element: (
      <div>
        <Home />
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
    path: "protected",
    element: (
      <div>
        <Protected />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
);
