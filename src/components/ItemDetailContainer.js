import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(1).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div>
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  item= {product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )
}        

export default ItemDetailContainer

