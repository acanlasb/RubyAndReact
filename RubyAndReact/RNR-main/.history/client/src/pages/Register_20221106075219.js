import {useState} from 'react';

const Register = () => {
          const [email, setEmail] = useState('text@test.com');
          const [password, setPassword] = useState('pass');
          const [passwordConfirmation, setPasswordConfirmation] = useState('pass');
          return (
            <div className="App">
              <h1>Register</h1>
              <form>
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
                  value={pass}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button>Register</button>
              </form>
            </div>
          );
}

export default Register;
