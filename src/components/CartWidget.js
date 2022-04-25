import { useContext } from "react";
import CartContext from "../context/CartContext";



const CartWidget = ()=>{

    const {getQuantity} = useContext(CartContext)

    return(
        <div>
            <img src="/images/cart.svg" alt='cart' className="mx-2" />
            {getQuantity()}
        </div>
        
    )
}

export default CartWidget