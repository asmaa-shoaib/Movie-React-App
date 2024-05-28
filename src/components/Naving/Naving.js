
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from '../NavItem/NavItem';
import './Naving.scss'
import logo from '../../assets/images/logo192.png'
export default function Naving(){
    return (
      <>
        <Navbar expand="lg" className=" bg-darkColor">
          <Container >
            <Navbar.Brand href='/movielist'><img src={logo} className='img-fluid'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className=" text-lightColor ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>  
                <NavItem styling='nav-link ' title='movies' novToLink='/movielist'/>
                <NavItem styling='nav-link ' title='Favourite' novToLink='/fav'/>
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
