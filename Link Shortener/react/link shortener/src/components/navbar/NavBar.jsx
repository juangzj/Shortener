import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../../../public/imgs/shortLink-logo.png';


function NavBar() {

  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="brand-custom">
            <img
              alt=""
              src={logo}
              width="70"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            ACORTADOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="light">INGRESAR</Button>
              <Button variant="dark">REGISTRASE</Button>
              <Nav.Link href="#pricing">ES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
