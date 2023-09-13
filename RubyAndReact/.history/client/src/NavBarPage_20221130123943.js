import React from "react";
import { useContext } from "react";
import { GiConsoleController } from "react-icons/gi";
import { GiConsoleController } from "react-icons/ai";


function NavBarPage({user, setUser}) {

  const handleLogout = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      };

  return (
    <div>
      <div className="Navbar">
        <h1 className="NavTitle">
          Video Games Database <GiConsoleController />
        </h1>
        <button className="cybr-btn">
          <a href="/" onClick={handleLogout} className="Logout">
            Logout
            <span aria-hidden>
              {" "}
              Here <AiOutlineLogout />
            </span>
            <span aria-hidden className="cybr-btn__glitch">
              Logout Logout🚪🏃‍♀️💨
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default NavBarPage;
