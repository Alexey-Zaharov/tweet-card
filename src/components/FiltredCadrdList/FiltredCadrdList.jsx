import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import css from "./FiltredCadrdList.module.css";

const FiltredCardList = () => {
  const getFiltredTweets = useSelector((state) => state.filters.filtredTweets);
  return (
    <>
      <ul className={css.CardList}>
        {getFiltredTweets.map(
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

export default FiltredCardList;
