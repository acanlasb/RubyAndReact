import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [passwordConfirmation, setPasswordConfirmation] =
    useState("password123");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Password does not match");
      return;
    }
    handleRegister({ email, password }, navigate);
    let item = { email, password, passwordConfirmation };
    console.warn(item);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up Form</h1>
        <label>Email</label>
        <br />
        <input
          class="input-line full-width"
          type="text"
          id="username"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          class="input-line full-width"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          class="input-line full-width"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />
        <button class type="submit" onClick={handleSubmit}>
          Sign Up
        </button>{" "}
        <button class="ghost-round full-width" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
