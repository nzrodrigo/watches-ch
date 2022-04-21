
import { Card, Button, Image} from "react-bootstrap";
import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";


const ItemDetail = ({ imageLink, title, description, price,  name ,category, stock , id}) => {

            const {addItem, isInCart} = useContext(CartContext)

            const handleOnAdd = (count) => {
                const productObj = {
                    id, name ,price, quantity: count
                }
        
                addItem(productObj)
            }

            

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
            
            {isInCart(id) ? <Button className="my-3" variant="secondary" as={Link} to={'/cart'}> Terminar compra</Button>: <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />}
            </Card.Body>
            <Card.Text className="my-4">
                {`Stock disponible: ${stock}`}
            </Card.Text>
            </Card>                      
    );
}

export default ItemDetail;