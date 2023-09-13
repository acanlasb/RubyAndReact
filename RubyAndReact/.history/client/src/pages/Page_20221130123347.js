import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("You're signed in! 🔐🔑🙌✊🥳🎉👏");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
  }

  return (
  );
}

export default LoginForm;
