import { useContext } from "react";
import CartContext from "../context/CartContext";
import {Card, Button } from 'react-bootstrap'


const ItemCart = ({id, title, price, quantity}) =>{

    const {removeItem}= useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <Card>
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text>
                    Cantidad: ${quantity}
                </Card.Text>
                <Card.Text>
                    Precio por unidad: ${price}
                </Card.Text>
                <Card.Text>
                    Subtotal: ${price * quantity}
                </Card.Text>
                <Button variant="secondary" onClick={() => handleRemove(id)}>X</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCart