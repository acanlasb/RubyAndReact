import React from "react";
import axios from "axios";
import Games from "./Games";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

function NavBarPage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAPIDATA().then((items) => {
      if (mounted) {
        setGames(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const auth = useContext(AuthContext);
  return (
    <div>
      <div className="Navbar">
        <div className="Brand">
          <h1>Video Games Database</h1>
        </div>
        <ul className="Menu">
          {/* <li>
            <a href="/newgames">Add New Games</a>
          </li> */}

          <a href="/" onClick={auth.handleLogout} className="Logout">
            Logout
          </a>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPage;
