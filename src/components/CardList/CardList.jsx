import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import css from "./CardList.module.css";

const CardList = () => {
  const getTweets = useSelector((state) => state.tweets.users);
  return (
    <>
      <ul className={css.CardList}>
        {getTweets.map(
          ({ id, user, tweets, followers, avatar, subscribed }) => {
            return (
              <UserCard
                key={id}
                id={id}
                user={user}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                subscribed={subscribed}
              />
            );
          }
        )}
      </ul>
    </>
  );
};

export default CardList;
