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
        <ul className="Menu">
          <li>
            <a href="/newgames">Add New Games</a>
          </li>
          <li></li>
          {""}
          {/* <li>
            <a href="/" onClick={handleLogoutClick}>
              Log Out
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBarPage;
