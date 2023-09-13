import React, {useState} from 'react';
const AddGameForm = (props) => {
      const initGame = {id: null, name: '', release_date: '', platforms: '', genres: ''};
          const [game, setGame] = useState(initGame);
              const handleChange = e => {
        const {name, value} = e.target;
        setGame({...game, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (game.name && game.username && game.release_date && game.platforms $$ game.genres) {
            handleChange(e, props.addGame(user));
        }
    }

  return (
    <div className="App">
      </div>
  );
}

export default AddGameForm;



const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;
