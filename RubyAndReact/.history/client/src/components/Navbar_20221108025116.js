import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Layout = () => {
  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
        <div>
          <button onClick={handleLogout}> logout</button>
        </div>
      );
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
      <Link to="/home">Home</Link>
      <Link to="/protected">Protected</Link>
      {renderAuthLinks}
      <Link to="/public">Public</Link>
      <h1>
        theres an outlet underneath. outlet is used if the user is authenticated
      </h1>
      <Outlet />
    </div>
  );
};

export default Layout;
