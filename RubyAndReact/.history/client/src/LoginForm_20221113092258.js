import { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState(null);
  const { handleLogin } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
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
        <button class="cybr-btn" role="button" type="submit">
          Login<span aria-hidden> </span>
          <span aria-hidden class="cybr-btn__glitch">
            Sign Up Sign Up Sign Up
          </span>
        </button>{" "}
        <button class="cybr-btn" role="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
