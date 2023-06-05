import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
const Home = lazy(() => import("../pages/Home"));
const Tweets = lazy(() => import("../pages/Tweets"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
