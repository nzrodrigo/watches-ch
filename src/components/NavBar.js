import 'bootstrap/dist/css/bootstrap.min.css';
import CarWidget from './CarWidget';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container} from 'react-bootstrap'



const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Watches</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Analogicos</Nav.Link>
            <Nav.Link href="#features">Digitales</Nav.Link>
            <Nav.Link href="#pricing">Smartwatches</Nav.Link>   
          </Nav>
          <Nav>
          <Nav.Link href="#pricing" className='justify-content-end' ><CarWidget /></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    );
}


export default NavBar;