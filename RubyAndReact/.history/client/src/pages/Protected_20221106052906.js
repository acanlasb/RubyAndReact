import {useContext} from 'react';
const Protected = () => {
  const auth = useContext(AuthContext)
  return (
    <div className="App">
      <h1>Protected</h1>
    </div>
  );
};

export default Protected;
