import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../src/images/laperla-logo.png";

function NavbarComponent() {
  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid className="align-self-start nav-logo">
        <Navbar.Brand href="/">
          <img
            alt="restaurant logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          La Perla Ristorante Italiano
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/winelist">Wine&nbsp;List</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
