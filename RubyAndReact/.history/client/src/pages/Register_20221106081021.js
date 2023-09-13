import { useState, useContext } from "react";

const Register = () => {
          const {handleRegister}
  const [email, setEmail] = useState("gmail@gmail..com");
  const [password, setPassword] = useState("pass");
  const [passwordConfirmation, setPasswordConfirmation] = useState("pass");

  const handleSubmit = (e) => {
          e.preventDefault();
          if(password !== passwordConfirmation) {
                    alert('Password does not match');
                    return;
          }
          console.log({email, password});
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
