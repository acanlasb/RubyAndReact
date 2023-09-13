Skip to content
DEV Community 👩‍💻👨‍💻
Search...

Log in
Create account

26
Like
17
Jump to Comments
38
Save

Cover image for Creating a CRUD app in React with Hooks
sanderdebr
sanderdebr
Posted on 8 Mar 2020 • Updated on 28 June 2020

Creating a CRUD app in React with Hooks
#
react
#
javascript
In this tutorial we will build a create, read, update and delete web application with React using React Hooks. Hooks let us use state and other features in functional components instead of writing class components.

View demo
View code

This tutorial is divided up in the following sections:

Setting up the project
Adding users table
Adding a user
Deleting a user
Updating a user
Using the Effect Hook
Bonus: fetching users from an API
1. Setting up the project
We will start by creating a react app with npm:

npx create-react-app react-crud-hooks

Then browse to this folder and delete everything from the /src folder except App.js, index.js and index.css

For index.css we will use a simple CSS boilerplate called Skeleton which you can find here: http://getskeleton.com/

Add the styles in the /public folder into index.html:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
Then convert App.js to a functional component and add the following set-up. Notice how easy the skeleton CSS boiler plate works:
import React from 'react'

const App = () => {

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          <h2>Add user</h2>
        </div>
        <div className="seven columns">
          <h2>View users</h2>
        </div>
      </div>
    </div>
  )
}

export default App
2. Adding users table
We will retrieve our user data from a separate file. Let’s create data.js inside /src and add an array called users with a couple user object inside and then export it:
const userList = [
    {
        id: 1,
        name: 'Frank',
        username: 'Frank Degrassi'
    },
    {
        id: 2,
        name: 'Birgit',
        username: 'Birgit Boswald'
    }
];

export default userList;
Then create a folder called /tables and add a file UserTable.jsx. Here we will add a basic table which loops over the users. Notice we are using a ternary operator which is the same as an if/else statement which returns immediately. Also we are destructuring off the object properties so we do not have to rewrite the property again. If there are no users found, we will show an empty cell with some text.
import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username} = user;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default UserTable;
The table loops over the users received by App.js through the user props. Let’s add them into App.js and also the functionality to retrieve users from data.js which we will do with useState. Every useState has a getter and a setter.
import React, {useState} from 'react'
import userList from './data.js';
import UserTable from './tables/UserTable';

const App = () => {

  const [users, setUsers] = useState(userList);

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="six columns">
          <h2>Add user</h2>
        </div>
        <div className="six columns">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App
Make sure to import the UserTable in App.js and add the users as props into UserTable.

3. Adding a user
Next up we will add the functionality to add a user, first by adding the function into App.js which receives the new user from the Add User component which we will create.

The addUser function puts an object containing a new user into our users array of user objects. We do this by using our setUsers from useState function. By using the spread operator we keep the current user array the same. The ID we will just set based on the current amount of users plus one.
const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }
Then we will pass this function to our Add User component:
<AddUserForm addUser={addUser} />
Which we will create now! Create a folder /forms with a file called AddUserForm.jsx.
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
Again we are using useState to manage the state of our new user. The initial state of the user values are empty. Now we will add the onChange and onSubmit functions. For handleChange, we destructure off the properties of the event.target object. Then we dynamically set our object keys based on the used input field:
import React, {useState} from 'react';

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
Great! Now we can add a user. Notice in our handleSubmit we are preventing the default page refresh and also checking if our user.name and user.username actually have both been filled in.

Update: to make sure our new user only gets added when the state has been set for this new user, we pass the addUser function als a callback after handleChange has been finished. This solves the bug if you add the same user quickly after each other.

4. Deleting a user
Now we will add the functionality to delete a user, which is quite simple. We will just filter over our users array and filter out the user which has the ID of the user we want to delete. Again we will use our setUsers function to update the new users state.

UserTable.jsx
<button onClick={() => props.deleteUser(id)}>Delete</button>
App.js
const deleteUser = id => setUsers(users.filter(user => user.id !== id));

<UserTable users={users} deleteUser={deleteUser} />
5. Updating a user
Updating a user is a bit more difficult than adding or deleting a user. First we will set up out form in ./forms/EditUserForm.jsx and import it into App.js. We will just copy our AddUserForm.jsx and change the currentUser to the user we are receiving from App.js:
import React, {useState} from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
onSubmit we send the updated users back to App.js

In App.js we will use the useState function again to check if the user is currently editing and to decide which user is currently being edited:
const [editing, setEditing] = useState(false);

const initialUser = {id: null, name: '', username: ''};

const [currentUser, setCurrentUser] = useState(initialUser);
We will show the AddUser or EditUser form based on editing state:
<div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          { editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
Then we will add our editUser and updateUser functions in App.js:
const editUser = (id, user) => {
  setEditing(true);
  setCurrentUser(user);
}
const updateUser = (newUser) => {
  setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
}
Great! Now we can edit our users. Let’s fix the last issue in the next section.

6. Using the Effect Hook
It is currently not possible to change user while editing, we can fix this by using the effect hook. This is similar to componentDidMount() in class components. First make sure to import useEffect in EditUserForm.jsx
useEffect(() => {
    setUser(props.currentUser)
}, [props])
This will make when the component re renders, the props are also updated.

Super! We have finished building our React CRUD app with Hooks.

View demo
View code

7. Bonus: fetching users from an API
Currently we have our data stored in a plain JS file but in most cases you want to fetch your data from an external source/API. In this bonus section we will build a function to fetch the data source asynchronously.

Let's user this free API to fetch three random users:
https://randomuser.me/api/?results=3

Fetching async data is quite simple and we can use multiple solutions for it, for example:

Using a library like axios
Using promises
Using async/await (cleaner style of writing promises).
I like to use the async await method. This is how it looks like:
const fetchData = async (amount) => {
 const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
 const json = await response.json();
 console.log(json);
}
We just put async in front of our function and then we can use await to only execute the next lines of code when that line is finished. We convert the result to JSON and then log the results to the screen. We would place this in our useEffect hook of App.js and fetch the data on component mount but let's go one step further.

We'll create our own custom React Hook by placing the code above in a seperate file and then returning the result and the loading state.

Create a new folder called hooks with a file useAsyncRequest.js with the following code:
import {useState, useEffect} from 'react';

const useAsyncRequest = amount => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
                const json = await response.json();
                setData(json.results, setLoading(false));
            } catch (err) {
                console.warn("Something went wrong fetching the API...", err);
                setLoading(false);
            }
        }

        if (amount) {
         fetchData(amount);
        }
    }, [amount]);

    return [data, loading]
}

export default useAsyncRequest;
What happens here is the following. With the useEffect hook we are fetching data from the API on the page load. This function will fire every time our amount will change, so only once because our amount will be a fixed number (3 in my example).

I've added a try-catch block to add error handling for the async await request. Then we'll return two state variables: data and loading. These we'll use in our App component.

Import this file inside the App component and add the following:
  const [data, loading] = useAsyncRequest(3);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: i,
          name: obj.name.first,
          username: obj.name.first + " " + obj.name.last,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);
What changed here is that the users or now set as null as default, and as soon as our Hook has given us back the result, we'll set the users to the fetched users.

The data we get back does not suit our userTable component so we have to format the result. I'm doing it here by mapping over the array and for each object returning a new object that we can use in our App.

The useEffect function/hook gets fired everytime our data variable changes. So basically whenever our useAsyncRequest hook is ready with fetching the data. Cool, right!

Finally, we'll update our App component so it only renders the user table when it is not loading and there are actually users:
{loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View users</h2>

            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
Thanks for following this tutorial! Make sure to follow me for more tips and tricks.

View demo
View code

Top comments (17)

Subscribe
pic
Add to the discussion


austejakazlauskyte profile image
Austeja Kazlauskyte
•
14 July 20 • Edited on 14 July

Hey again!
I have a question.
Let's say my User object not only has fields like Id, Name, and Username, but it also has an Address. Inside the Address field, it has City and ZIP.
In other words, the User has another object inside it.
If I would like to add this User object using a form, how could I reach those second-level properties, like City, in order to update the name?

Thank you for any tips!
Austeja


5
 likes
Like
Reply


sanderdebr profile image
sanderdebr
•
16 July 20 • Edited on 16 July

Hi no problem!

I would create an exception for your ZIP and City fields. When the name of the fields is one of those, the function will update the user object.
const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "zip" || name === "city") {
      setUser({ ...user, address: { [name]: value } });
    } else {
      setUser({ ...user, [name]: value });
    }
  };
It is also possible to build a function that searches all the object keys in the user object, and updated the one you want if it finds it but this is a bit more work.

The three dots indicate the object spread, this automatically will create a copy of the object and update the values you want. Another way is to use const draftUser = Object.assign({}, user); to create a copy of the user object. Then you can object this draftUser object and update the state with it :-)


6
 likes
Like
Reply


austejakazlauskyte profile image
Austeja Kazlauskyte
•
17 July 20

thank you, amazing!


1
 like
Like
Reply


austejakazlauskyte profile image
Austeja Kazlauskyte
•
25 June 20

I ran into a problem with the EditUserForm method.
The Edit button is not working;/
I have a feeling it has to do this method:
const handleChange = e => {
const {name: name, value} = e.target;
setUser({...user, [name]: value});
}

I've got an underline saying: Argument type {} is not assignable to parameter type ((prevState: EditUserForm.props.currentUser) => EditUserForm.props.currentUser) | EditUserForm.props.currentUser

Any ideas what could be wrong?


1
 like
Like
Reply


sanderdebr profile image
sanderdebr
•
25 June 20

Hi, for me it still works using your piece of code. Please checkout my repo if you can find any differences:
github.com/sanderdebr/react-crud-h...

If not you could show me a bit more of your code


6
 likes
Like
Reply


austejakazlauskyte profile image
Austeja Kazlauskyte
•
27 June 20

A million thanks for your reply.

I solved the issue by myself. Apparently, I wrote the functions but did not insert the onClick method on the button, to trigger everything.
A beginner mistake.

Thank you for a great tutorial, it made it very easy for me to understand how to do CRUD with React.

And to be honest - through you, I found Skeleton and immediately fell in love with this framework. I am definitely going to use it in the future when I need smth fast to bootstrap my small coding projects.


5
 likes
Like
Thread

austejakazlauskyte profile image
Austeja Kazlauskyte
•
28 June 20

Hey, another question if you may - how would you fetch data from an API?
Would you just replace the data.js file with a function that receives data using Hooks, or would you recommend something else? Thank you!


5
 likes
Like
Thread

sanderdebr profile image
sanderdebr
•
28 June 20

Hi, thanks for the suggestion I've just added a Bonus section where I explain how to fetch user data from an API. I think it is a very helpful addition to this tutorial.

The way I did it might be a bit hard to understand, there are easier ways to fetch data in React but in this way you'll also learn about custom hooks :)

Also, I've added a little update for adding multiple users with the same data.


6
 likes
Like
Thread

austejakazlauskyte profile image
Austeja Kazlauskyte
•
2 July 20

That is amazing, thanks! ⭐️💜👍🏻


2
 likes
Like
Reply


nguyentung59 profile image
Tung Nguyen
•
8 Aug 20 • Edited on 8 Aug

In ./tables/UserTable.jsx You add onClick={() => props.editUser(id, user)} into button Edit


1
 like
Like
Reply


danielpdev profile image
danielpdev
•
9 Mar 20 • Edited on 9 Mar

Great post!
It has a little issue.
It does not work well when you hit twice add user for the same data.


2
 likes
Like
Reply


sanderdebr profile image
sanderdebr
•
28 June 20 • Edited on 28 June

Thanks, I've added a fix for this!


1
 like
Like
Reply


vinh2203 profile image
Vinh2203
•
13 Mar 20

you can modify the handleSubmit function in AddUserForm.jsx by adding this line
setUser(initUser);


Like
Reply


claudewill1 profile image
Claude Will
•
27 Apr 20 • Edited on 27 Apr

One issue I ran into with this is that the deleteUser method deletes all users from the table when I just click delete on one of them.

Any idea how I can correct this? I originally found this tutorial on another website then did a search when I ran into the issue and came here. I am some what "new" to React and can't figure out why it's deleting all with clicking the delete button on a single item.

Thank you


1
 like
Like
Reply


claudewill1 profile image
Claude Will
•
27 Apr 20

Found the issue. Heh I feel like an idiot, I always seem to have something really small that I'm missing. It's working fine now. Thanks for the article.


2
 likes
Like
Reply


termyn9 profile image
termyn9
•
31 Oct 20 • Edited on 31 Oct

Hey! U did a perfect course about CRUD- app, but i do not undrestand something... Could you show how to realize POST, ADD, DELETE methods of API? I really need your help, I can't cope on my own.


1
 like
Like
Reply


vnivy profile image
vnivy
•
19 May 21

Hey!
I have a question about how to add 5 to 6fields if tried adding those but its not working for me it would be nice if u help me :)
thanks in advance.


1
 like
Like
Reply
View full discussion (17 comments)
Code of Conduct • Report abuse
Update Your DEV Experience Level:
Settings

Go to your customization settings to nudge your home feed to show content more relevant to your developer experience level. 🛠

Read next
willkre profile image
Create & deploy an ERC-20 token in 15 minutes (Truffle, OpenZeppelin, Goerli)
Will - Nov 2

ruppysuppy profile image
7 Shorthand Optimization Tricks every JavaScript Developer Should Know 😎
Tapajyoti Bose - Oct 30

samchon profile image
I found 10,000x faster TypeScript validator library
Jeongho Nam - Nov 1

umasankarswain profile image
How to update a record and delete that same record before update (nest js & mongoDB)
umasankar-swain - Oct 19


sanderdebr
Follow
Passionate front-end developer.
JOINED
26 Jan 2020
More from sanderdebr
JS ES6 Design Patterns: Factory
#javascript
⚗️ React Redux CRUD app for beginners [with Hooks]
#react #javascript #redux #css
Flawless React State Management: useReducer and Context API
#react #javascript
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
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.
