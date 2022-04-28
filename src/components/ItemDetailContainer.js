import { useState, useEffect } from 'react'
import { firestoreDb } from '../services/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc, limit} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId), limit(1)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div>
            { 
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1 > 
            }
        </div>
    )
}        

export default ItemDetailContainer

