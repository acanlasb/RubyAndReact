import React, {useState} from 'react';

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name=”name” value={user.name} />
            <label>Username</label>
            <input className="u-full-width" type="text" name=”username” value={user.username} />
            <button className="button-primary" type="submit">Add user</button>
        </form>
    )
}

export default AddUserForm;
