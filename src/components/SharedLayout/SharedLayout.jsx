import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
