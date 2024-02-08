import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function NavBar() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          NC News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/users/${loggedInUser.username}`}>Signed in as: {loggedInUser.name || 'Not Signed in'} </Nav.Link>
            <Nav.Link as={Link} to='/users'>View users</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#bookmarks">Bookmarks</Nav.Link>
            <Nav.Link href="#post-article">
              Post
            </Nav.Link>
            <Nav.Link href="#create-profile">Create profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
