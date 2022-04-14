import React from "react";
import { useEffect, useState} from "react";
import { getProducts } from '../asyncmock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'


function ItemListContainer(){

    const [products, setProducts] = useState([]);
    
    const { categoryId } = useParams();

    useEffect(()=>{
        getProducts(categoryId).then((products)=>{
            setProducts(products)
        }).catch(error =>{
            console.log(error);
        });
    }, [categoryId]);

    

    return (
        <div>      
          <ItemList products={products} />
        </div>
    )
};

        


export default ItemListContainer;