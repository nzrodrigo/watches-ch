import React from "react";
import ItemCount from './ItemCount.js'
import { useEffect, useState} from "react";
import { getProducts } from '../asyncmock';
import ItemList from './ItemList';


function ItemListContainer(){
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then((products)=>{
            setProducts(products)
        });
    }, []);

    const onAddItem= (itemCount)=>{
        alert(itemCount);
    }

    return (
        <div>      
          <ItemList products={products} />
          <ItemCount stock={10} initial={1} onAdd={onAddItem} />
        </div>
    )
};

        


export default ItemListContainer;