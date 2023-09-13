import React from 'react';
import { useNavigate } from "react-router-dom";


function NavBarPage({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div>
      <div className="Navbar">
        <div className="Brand">
          <h3>Video Games Database</h3>
        </div>
        <ul className="Menu">
          <li>
            <a href="/newgames">Add New Games</a>
          </li>
          <li></li>
          {""}
          <li>
            <a href="/" onClick={handleLogoutClick}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPage
