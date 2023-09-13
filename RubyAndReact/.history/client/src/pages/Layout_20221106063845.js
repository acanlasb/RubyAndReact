import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/protected">Protected</Link>
      </div>
      <div>
        <Link to="/public">Public</Link>
      </div>
      <h1>Outlet Navbar</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
