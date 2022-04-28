import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import CartWidget from './CartWidget';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { firestoreDb } from '../services/firebase';
import { getDocs, collection } from 'firebase/firestore';



const NavBar = () => {

  const [categories, setCategories] = useState([])
  
  const {cart} = useContext(CartContext)

  useEffect(()=>{
      getDocs( collection(firestoreDb,'categories')).then( response =>{
        const categories = response.docs.map( doc => {
          return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
      })
    
  }, [])

    return(
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
          <Navbar.Brand as={Link} to='/'>Watches</Navbar.Brand>
          <Nav className="justify-content-center">
            {categories.map( cat =><Nav.Link as={Link} key={cat.id} to={`/category/${cat.id}`}>{cat.name}</Nav.Link>)}
          </Nav>
          <Nav>
          <Nav.Link as={Link} to='/cart' className='justify-content-end' >
            {cart.length >0 ? <CartWidget/> : ''}
          </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    );
}


export default NavBar;