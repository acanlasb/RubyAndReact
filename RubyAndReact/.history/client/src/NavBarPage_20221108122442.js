import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

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
          <li>
            <a href="/newgames">Add New Games</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPage;
