import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const {handleLogin} = useContext (AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("You're signed in! 🔐🔑🙌✊🥳🎉👏");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({email, password}, navigate)
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className="form">
        <h1>Login Form</h1>
        <label htmlFor="email" className="label">
          Email
        </label>
        <br />
        <input
          className="field"
          placeholder="TYPE YOUR EMAIL HERE"
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password" className="label">
          Password
        </label>
        <br />
        <input
          className="field"
          placeholder="TYPE YOUR PASSWORD HERE"
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
