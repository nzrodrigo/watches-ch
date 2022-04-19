import React, { useState }  from "react";



function ItemCount ({stock, initial, onAdd}){
    const [itemCounter, setItemCounter] = useState(initial)
   

     const add= ()=>{
         if(itemCounter < stock){
             setItemCounter(itemCounter + 1)
         }
     }


     const subtract= ()=>{
       if(itemCounter < 1){
           setItemCounter(itemCounter)
       }else{
           setItemCounter(itemCounter - 1)
         
       }

     };

    const addToCart= ()=>{
        onAdd(itemCounter)
    }
    
    
    return(
        <div className="mx-auto mt-2 col-xl-1">
            <button className="btn btn-outline-secondary" type="button" onClick={add}>+</button>
            <p className="text-center mt-3">
                {itemCounter}
            </p>
            <button className="btn btn-outline-secondary" type="button" onClick={subtract}>-</button>
            <button className="btn btn-secondary btn-sm mt-2 " onClick={addToCart}>Agregar al carrito</button>
        </div>  
        
    )
};

export default ItemCount;