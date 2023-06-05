import { useDispatch } from "react-redux";
import { ReactComponent as GoItLogo } from "./Logo.svg";
import { subscribeTweet, unSubscribeTweet } from "../../redux/operations";
import css from "./UserCard.module.css";
import Img from "./Picture.png";

const UserCard = ({ id, tweets, followers, avatar, subscribed }) => {
  const dispatch = useDispatch();
  const subscribeToggle = () => {
    if (subscribed) {
      dispatch(unSubscribeTweet({ id, followers, subscribed }));
      return;
    }
    dispatch(subscribeTweet({ id, followers, subscribed }));
  };
  return (
    <li id={id} className={css.UserCard}>
      <GoItLogo className={css.UserCardLogo} width={76} height={22} />
      <img src={Img} alt="Different Icons" className={css.Img} />
      <span className={css.UserPhoto}>
        <img src={avatar} alt="User" className={css.UserImg} />
      </span>
      <span className={css.Line}></span>
      <ul className={css.UserList}>
        <li className={css.UserItem}>{tweets} Tweets</li>
        <li className={css.UserItem}>
          {followers.toLocaleString("en-US")} Followers
        </li>
      </ul>
      <button
        type="button"
        className={
          !subscribed
            ? css.UserCardButton
            : `${css.UserCardButton} && ${css.IsSelected}`
        }
        onClick={subscribeToggle}
      >
        {subscribed ? "Following" : "Follow"}
      </button>
    </li>
  );
};

export default UserCard;
