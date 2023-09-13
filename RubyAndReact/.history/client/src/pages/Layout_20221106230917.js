import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Layout = () => {
  const { authenticated } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <div> logout</div>;
    }
    return (
      <div className="App">
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/protected">Protected</Link>
      </div>
      {renderAuthLinks}
      <div>
        <Link to="/public">Public</Link>
      </div>
      <h1>
        theres an outlet underneath. outlet is used if the user is authenticated
      </h1>

      <Outlet />
    </div>
  );
};

export default Layout;
