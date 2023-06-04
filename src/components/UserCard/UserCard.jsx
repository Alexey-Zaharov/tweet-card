import { ReactComponent as GoItLogo } from "./Logo.svg";
import css from "./UserCard.module.css";
import Img from "./Picture.png";

const UserCard = () => {
  return (
    <div className={css.UserCard}>
      <GoItLogo className={css.UserCardLogo} width={76} height={22} />
      <img src={Img} alt="Different Icons" className={css.Img} />
      <span className={css.UserPhoto}>
        <img src="" alt="User Photo" className={css.UserImg} />
      </span>
      <span className={css.Line}></span>
      <ul className={css.UserList}>
        <li className={css.UserItem}>Tweets</li>
        <li className={css.UserItem}>Followers</li>
      </ul>
      <button type="button" className={css.UserCardButton}>
        Follow
      </button>
    </div>
  );
};

export default UserCard;
