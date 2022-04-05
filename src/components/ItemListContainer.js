import React from "react";
import ItemCount from './ItemCount.js'
import { useEffect } from "react";
import { getProducts } from '../api/api';
import { useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer(){
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(function(products){
            console.log(products);

            setProducts(products)
        });
    }, []);

    function onAddItem(itemCount){
        alert(itemCount);
    }

    return (
        <div>
        
          { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
          <ItemCount stock={10} initial={1} onAdd={onAddItem} />

        </div>
    )
};

        


export default ItemListContainer;