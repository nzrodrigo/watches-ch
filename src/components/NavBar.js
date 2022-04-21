import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../asyncmock';
import CartWidget from './CartWidget';




const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories().then(categories=>{
      setCategories(categories)
    })
  }, [])

    return(
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to='/'>Watches</Navbar.Brand>
          <Nav className="justify-content-center">
            {categories.map( cat =><Nav.Link as={Link} key={cat.id} to={`/category/${cat.id}`}>{cat.name}</Nav.Link>)}
          </Nav>
          <Nav>
          <Nav.Link as={Link} to='/cart' className='justify-content-end' >
          
          <CartWidget />
          
          </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    );
}


export default NavBar;