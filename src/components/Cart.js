import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";




const Cart = ()=>{

    const {cart } = useContext(CartContext)

    if (cart.length === 0 ){
        return(
            <div>
            <h1>No hay productos agregados</h1>
            <Button variant="secondary" className="my-3" as={Link} to={'/'}>Volver a la tienda</Button>
            </div>
        )
    }

    return(
        <div>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <ItemCart quantity={prod.quantity} id={prod.id} price={prod.price} title={prod.title} />)
            }   
        </ul>
        </div>
    )   
}

export default Cart;