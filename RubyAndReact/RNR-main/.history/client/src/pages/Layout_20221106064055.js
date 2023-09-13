import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
        <Link to="/home">Home</Link>
        <Link to="/protected">Protected</Link>
        <Link to="/public">Public</Link>
        </div>
      <h1>Outlet Navbar</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
