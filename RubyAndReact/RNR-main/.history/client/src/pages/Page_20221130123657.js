import HomePage from "./HomePage";
import NewGameForm from "../games/NewGameForm";
import GameItem from "../games/GameItem";
import Games from "../games/Games";
import { GiConsoleController } from "react-icons/gi";

const API_URL = "http://localhost:3000/api/v1/games";

function getAPI() {
  return axios.get(API_URL).then((response) => response.data);
}

function Page({ onLogin }) {
            const [user, setUser] = useState(null);
            const [games, setGames] = useState([]);
            const [filter, setFilter] = useState("");
  return (
    <div>
      <div className="Protected">
        <HomePage />
        <div className="UsersandCreate">
          <p>
            Yay! Hello. You're logged in. <GiConsoleController />
          </p>
          <NewGameForm onAddGame={handleAddGame} />
        </div>
        <div className="GameListDelete">
          <h1 className="App-Title">Upcoming Games</h1>
          {games.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              onUpdateGame={handleUpdateGame}
              onDeleteGame={handleDeleteGame}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
