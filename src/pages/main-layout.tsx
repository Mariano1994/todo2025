import { NavLink, Outlet } from "react-router";
import Container from "../components/container";

function MainLayout() {
  return (
    <>
      <Container as="header">Ola mundo Header</Container>

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
