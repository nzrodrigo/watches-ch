import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context/CartContext";
import ItemCart from "./ItemCart";
import {addDoc, collection, getDocs, query, where, documentId} from 'firebase/firestore';
import {firestoreDb} from '../services/firebase';
import { writeBatch } from "firebase/firestore";
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


const Cart = ()=>{

    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [client, setClient] = useState({
        firstName: "",
        email: "",
        phone: ""
    })

    const handleFirstNameInput = (event)=>{
        setClient({...client, firstName: event.target.value}) 
     }
      const handleEmailInput = (event)=>{
         setClient({...client, email: event.target.value}) 
      }
      const handlePhoneInput = (event)=>{
         setClient({...client, phone: event.target.value}) 
      }
      
    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer:{
                name: client.firstName,
                email: client.email,
                phone: client.phone
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

        if(loading) {
            return <h1>Se esta generando su orden</h1>
        }
        if(getQuantity() === 0) {
            return (
                <h1>No hay items en el carrito</h1>
            )
        }


    return(
        <div>
        <Table hover size="md" className="w-75 p-3 mx-auto mt-5">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(p => <ItemCart key={p.id} {...p} />)}
        </tbody>
      </Table>
        
        <h3>Total: ${getTotal()}</h3>
        <Button variant="outline-secondary" className="my-3" onClick={() => clearCart()}>Limpiar carrito</Button>
        <Button variant="secondary" className="my-3 mx-2" onClick={handleShow} >CheckOut</Button>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese sus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Ingrese su nombre" onChange={handleFirstNameInput} value={client.firstName}  /> 
            </Form.Group>

            <Form.Group className="mb-3"  controlId="formBasicEmail">
                <Form.Label>e-mail</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su e-mail" onChange={handleEmailInput} value={client.email} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control placeholder="Ingrese su número de telefono" onChange={handlePhoneInput} value={client.phone}  />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createOrder} onSubmit={handleClose}>  
            Guardar y comprar
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )   
}

export default Cart;