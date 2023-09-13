import { Link } from "react-router-dom";
const Public = () => {
  return (
    <div className="App">
      <h1>Public</h1>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Public;
