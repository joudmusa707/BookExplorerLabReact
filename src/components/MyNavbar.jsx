import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto gap-3">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
