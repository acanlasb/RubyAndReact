import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [passwordConfirmation, setPasswordConfirmation] = useState("password123");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Password does not match");
      return;
    }
    handleRegister({ email, password }, navigate);
  };
  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>password</p>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>passwordconfirmation</p>
        <input
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <button>Register</button>
      </form>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Register;
