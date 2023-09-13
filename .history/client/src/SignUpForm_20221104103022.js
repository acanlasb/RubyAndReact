import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignUpForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(email));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    let item={email, password,passwordConfirmation}
    console.warn(item)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up Form</h1>
        <label>Email</label>
        <br />
        <input
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
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />
        <button type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>{" "}
        <button onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default SignUpForm;
