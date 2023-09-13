import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function NavBarPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
          <h1>Video Games Database</h1>
        </div>
        <ul className="Menu">
          <li>
            <a href="/newgames">Add New Games</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPage;
