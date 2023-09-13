import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
//files
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "../NavBarPage";
import HomePage from "../pages/HomePage";
import Protected from "../pages/Protected";
import ErrorBoundary from "./ErrorBoundary";
import Games from "./Games";
import store, { Persistor } from "./Store";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Provider store={store}>
          <PersistGate loading={null} persistor={Persistor}>
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/protected" element={<Protected />} />
          </PersistGate>
        </Provider>
      </Routes>
    </div>
  );
}

export default App;
