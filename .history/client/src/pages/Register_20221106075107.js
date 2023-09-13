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
              <input value={email} onChange=/>
              <p>password</p>
              <input />
              <p>passwordconfirmation</p>
              <input />
              <button>Register</button>
            </form>
            </div>
          );
}

export default Register;
