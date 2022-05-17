import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Button } from 'react-bootstrap'



const ItemCart = ({id, title, price, quantity}) =>{

    const {removeItem}= useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <tr >
            <td>{title}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>$ {price * quantity}</td>
            <td><Button variant="secondary" onClick={() => handleRemove(id)}>X</Button></td>
        </tr>
    )
}

export default ItemCart