import { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const { handleLogin } = useContext(AuthContext);
    const notify = () => toast("Yo");


  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
    let item = { email, password };
    console.warn(item);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
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
        <button
          className="cybr-btn"
          role="button"
          type="submit"
          onClick={notify}
        >
          Login<span aria-hidden> Here</span>
          <span aria-hidden className="cybr-btn__glitch">
            Login Login Login
          </span>
        </button>
        <br />
        <br />
        <button
          className="cybr-btn"
          role="button"
          onClick={() => navigate("/")}
        >
          Cancel<span aria-hidden> Here</span>
          <span aria-hidden className="cybr-btn__glitch">
            Cancel Cancel Cancel
          </span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
