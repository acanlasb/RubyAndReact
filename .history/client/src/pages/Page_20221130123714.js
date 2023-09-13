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

  //games section
  useEffect(() => {
    fetch("/api/v1/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  //read
  useEffect(() => {
    let mounted = true;
    getAPI().then((items) => {
      if (mounted) {
        setGames(items);
      }
    });
    return () => (mounted = false);
  }, []);
  //create
  function handleAddGame(addedGame) {
    setGames((games) => [...games, addedGame]);
  }
  //updated
  function handleUpdateGame(updatedGame) {
    setGames((games) =>
      games.map((game) => {
        return game.id === updatedGame.id ? updatedGame : game;
      })
    );
  }
  //delete
  function handleDeleteGame(deletedGame) {
    setGames((game) => games.filter((game) => game.id !== deletedGame.id));
  }

  //auto login
  useEffect(() => {
    fetch("/authorized").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
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
