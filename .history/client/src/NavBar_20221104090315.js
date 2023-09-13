import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/sessions", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            setIsAuth(true);
          });
        }
      });
    }, []);

    if (!isAuth) {
      return <div>Logged in</div>;
    }


  return (
    <div className="Navbar">
      <div className="Brand">
        <h3>Video Games Database</h3>
      </div>
      <ul className="Menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
