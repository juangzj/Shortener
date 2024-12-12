import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../../../public/imgs/shortLink-logo.png';
import { useNavigate } from 'react-router-dom'; // useNavigate import to manage routes



function NavBar() {

  const navigate = useNavigate(); // navigate instance

  /**
   * Function to redirect to the Login page
   */
  const handleLoginClick = () => {
    navigate('/Login')
  }

  /**
   * Function to redirect to the Register page
   */
  const handleRegisterClick = () => {
    navigate('/Register')
  }



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
            SHORTENER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="light" onClick={handleLoginClick} >LOG IN </Button>
              <Button variant="dark" onClick={handleRegisterClick} >LOG UP</Button>
              <Nav.Link href="#pricing">ES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
