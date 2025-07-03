import { NavLink, Outlet } from "react-router";

import Header from "../core-components/header";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <footer>
        <NavLink to={"/login"}>login</NavLink>
      </footer>
    </>
  );
}

export default MainLayout;
