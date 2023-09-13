import { useState, useContext } from "react";
import {AuthContext} from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
          const {handleRegister} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("pass");
  const [passwordConfirmation, setPasswordConfirmation] = useState("pass");

  const handleSubmit = (e) => {
          e.preventDefault();
          if(password !== passwordConfirmation) {
                    alert('Password does not match');
                    return;
          }
          handleRegister({ email, password });
  }
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
    </div>
  );
};

export default Register;
