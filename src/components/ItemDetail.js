
import { Card, Button, Image} from "react-bootstrap";
import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({ imageLink, title, description, price, category, stock }) => {
                
            const [quantity, setQuantity] = useState(0)
            const handleOnAdd= (q)=>{
                setQuantity(q)
            }
            console.log(quantity);

    return( 
        
        

            <Card className="mt-5 px-auto">
            
            <Card.Body >
            <Card.Title className="my-3">'{title}'</Card.Title>
            <Image src={imageLink} />
            <Card.Text className="my-4">
                {`Categoria: ${category}`}
            </Card.Text>
            <Card.Text className="my-4">
                {description}
            </Card.Text>
            <Card.Text className="my-4">
                {`Precio: $${price}`}
            </Card.Text>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
            <Button className="my-3" variant="secondary" as={Link} to={'/cart'}>Terminar compra</Button>
            </Card.Body>
            <Card.Text className="my-4">
                {`Stock disponible: ${stock}`}
            </Card.Text>
            </Card>                      
    );
}

export default ItemDetail;