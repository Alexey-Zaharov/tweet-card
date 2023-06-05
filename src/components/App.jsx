import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
// import { useSelector } from "react-redux";
const Home = lazy(() => import("../pages/Home"));
const Tweets = lazy(() => import("../pages/Tweets"));

const App = () => {
  // const isLoading = useSelector((state) => state.tweets.isLoading);
  // const error = useSelector((state) => state.tweets.error);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />}></Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
