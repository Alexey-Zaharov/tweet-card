import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, loadMoreTweets } from "../redux/operations";
import CardList from "../components/CardList/CardList";
import Button from "../components/Button/Button";

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const onLoad = () => {
    dispatch(loadMoreTweets(tweets.currentPage));
  };

  return (
    <>
      {tweets?.users && <CardList />}
      <Link to="/">
        <Button text={"Go Back"} />
      </Link>
      {tweets?.users && <Button onClick={onLoad} text={"Load More"} />}
    </>
  );
};

export default Tweets;
