import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart]= useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity= () =>{
        let count= 0
        cart.forEach(prod =>{
            count=count += prod.getQuantity
        })

        return count
    }

    const isInCart = (id) =>{
        cart.some(prod => prod.id === id)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const removeItem = (id) =>{
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext