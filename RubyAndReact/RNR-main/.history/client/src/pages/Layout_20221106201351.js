import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  const {authenticated} = useContext(AuthContext);
  const renderAuthLinks = () => {
    if(
      <div
    )
  }
  return (
    <div className="App">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>{" "}
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/protected">Protected</Link>
      </div>
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
