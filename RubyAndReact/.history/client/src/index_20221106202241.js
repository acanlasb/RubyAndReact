import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import Games from "./Games";
import GamesForm from "./GamesForm";
import Home from "./pages/Home";
import AuthProvider from "./providers/AuthProvider";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/newgames",
    element: <GamesForm />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/protected",
    element: <Protected />,
  },
  {
    path: "/public",
    element: <Public />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>

);
