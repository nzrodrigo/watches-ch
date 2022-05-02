import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context/CartContext";
import ItemCart from "./ItemCart";
import {addDoc, collection, getDocs, query, where, documentId} from 'firebase/firestore';
import {firestoreDb} from '../services/firebase';
import { writeBatch } from "firebase/firestore";


const Cart = ()=>{

    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

   

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Rodrigo',
                phone: '11111111',
                email: 'rodrigo@gmail.com'
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
        <h1>Cart</h1>
        {cart.map(p => <ItemCart key={p.id} {...p} />)}
        <h3>Total: ${getTotal()}</h3>
        <Button variant="secondary" className="my-3" onClick={() => clearCart()}>Limpiar carrito</Button>
        <Button variant="secondary" className="my-3" onClick={() => createOrder()}>Confirmar compra</Button>
        </div>
    )   
}

export default Cart;