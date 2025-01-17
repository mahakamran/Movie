import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <div className="bg-black">
      <Navbar expand="lg" className="text-white">
        <Container className="flex items-center justify-between">
          {/* Brand */}
          <Navbar.Brand as={Link} to="/" id="movie" className="text-white font-bold text-2xl">
            Movies
          </Navbar.Brand>
          {/* Hamburger Icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto flex items-center space-x-4">
              {/* Search link with increased font size */}
              <NavLink
                to="/search"
                id="search"
                className="text-white text-2xl sm:text-xl py-2 sm:py-0"
                activeClassName="text-emerald-700"
              >
                Search
              </NavLink>

              {/* LogIn Button with emerald-700 background */}
              <NavLink to="/login">
                <Button id="btns" className="bg-emerald-700 text-white px-6 py-2 rounded-lg sm:text-lg border-none">
                  LogIn
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
