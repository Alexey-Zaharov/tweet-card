import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <ul className="navigationList">
        <li className="navigationItem">
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tweets" className="link">
            Tweets
          </NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
