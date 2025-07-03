import Container from "../components/container";
import logo from "../assets/image/logo.svg";

function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <img src={logo} alt="application logo" className="h-9 md:h-12" />
    </Container>
  );
}

export default Header;
