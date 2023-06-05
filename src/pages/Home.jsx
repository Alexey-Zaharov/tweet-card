import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, loadMoreTweets } from "../redux/operations";
import CardList from "../components/CardList/CardList";
import Button from "../components/Button/Button";
import { setShowModal } from "../redux/filterSlice";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);
  const filter = useSelector((state) => state.filters.modalToShow);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const onLoad = () => {
    dispatch(loadMoreTweets(tweets.currentPage));
  };

  const showModal = () => {
    dispatch(setShowModal());
  };

  return (
    <>
      {filter && <Modal />}
      {tweets?.users && <Navigate to="/" />}

      <Link to="/tweets">
        <Button text={"Tweets"} />
      </Link>
      <Button text={"Filter"} onClick={showModal} />
      {tweets?.users && <CardList />}
      {tweets?.users && <Button onClick={onLoad} text={"Load More"} />}
    </>
  );
};

export default Home;
