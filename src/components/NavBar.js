import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../asyncmock';



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
          <Nav.Link as={Link} to='/carwidget' className='justify-content-end' >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                { 0 }
              </svg>
          </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    );
}


export default NavBar;