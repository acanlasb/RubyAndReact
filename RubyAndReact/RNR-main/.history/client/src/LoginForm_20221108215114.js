import { useState, useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
    const { handleLogin } = useContext(AuthContext);


  function handleSubmit(e) {
    e.preventDefault();
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
          class="input-line full-width"
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
          class="input-line full-width"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button class="button-89" role="button" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>{" "}
        <button class="ghost-round full-width" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
