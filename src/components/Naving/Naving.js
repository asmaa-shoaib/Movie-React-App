import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import NavItem from '../NavItem/NavItem';
import './Naving.scss'

export default function Naving(){
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand href="#">FilMLOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>  
                <NavItem styling='nav-link active'title='home' novToLink='/home'/>
                <NavItem styling='nav-link ' title='about' novToLink='/about'/>
                <NavItem styling='nav-link' title='movies' novToLink='/movielist'/>
                <NavItem styling='nav-link' title='profile' novToLink='/home'/>
                <NavItem styling='nav-link' title='Favourite' novToLink='/fav'/>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>     
      </>
    
  );
}
