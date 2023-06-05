import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Tweets = () => {
  return (
    <>
      <Link to="/">
        <Button text={"Go Back"} />
      </Link>
      <h2>Have no idea what to render here</h2>
    </>
  );
};

export default Tweets;
