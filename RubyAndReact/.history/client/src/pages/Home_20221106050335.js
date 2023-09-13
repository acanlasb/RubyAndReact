import { useContext } from '
const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
