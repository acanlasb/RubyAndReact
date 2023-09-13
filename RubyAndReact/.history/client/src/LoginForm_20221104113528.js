import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) =>{
        setUser(user);
        }
        );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
        let item = { email, password };
        console.warn(item);
  }



  return (
        <div className="App">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button variant="fill" color="primary" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>{" "}
      <button onClick={() => navigate("/")}>Cancel</button>
    </form>
    </
  );
}

export default LoginForm;
