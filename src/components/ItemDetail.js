
import { Card, Button, Image} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ imageLink, title, description, price, category }) => {

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
            <Button  as={Link} to={'/carwidget'} variant="secondary" className="mb-3">Agregar al carrito</Button>
            </Card.Body>
            </Card>                      
    );
}

export default ItemDetail;