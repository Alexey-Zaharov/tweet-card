import { NavLink } from "react-router-dom";

const Tweets = () => {
  return (
    <div>
      <p>Tweets</p>
      <NavLink to="/" className="link">
        Back
      </NavLink>
    </div>
  );
};

export default Tweets;
