import { Link } from "react-router-dom";
import UserCard from "../components/UserCard/UserCard";

const Home = () => {
  return (
    <div>
      <UserCard />
      <button type="button">Load More</button>
      <Link to="/">Home</Link>{" "}
    </div>
  );
};

export default Home;
