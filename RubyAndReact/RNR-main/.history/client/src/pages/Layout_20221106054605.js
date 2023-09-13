import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/protected">Protected</Link>
      </div>
      <div>
        <Link to="/public">Public</Link>
      </div>

      
    </div>
  );
};

export default Layout;
