
function Page({ onLogin }) {
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
        {/* <input
            className="search"
            placeholder="search here"
            onChange={(e) => setFilter(e.target.value)}
          />
          {<Games games={[]}/>} */}
        {/* <div className="readsection">
            <Games games={games} />
          </div> */}
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
