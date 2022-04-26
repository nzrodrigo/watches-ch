import { useContext } from "react";
import CartContext from "../context/CartContext";


const ItemCart = ({id, title, price, quantity}) =>{

    const {removeItem}= useContext(CartContext)

    return(
        <li>
            <li key={id}>{title}  cantidad: {quantity} precio uni: {price}  subtotal: {quantity * price} <button onClick={() => removeItem(id)}>X</button></li>
        </li>
    )
}

export default ItemCart