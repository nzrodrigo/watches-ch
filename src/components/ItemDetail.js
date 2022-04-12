import ItemCount from "./ItemCount";
import { Col, Container, Card, Button, Row } from "react-bootstrap";
import React from "react";


const ItemDetail = (item ) => {

    return(                 
        <> 
        <Container className="mt-3">
            <Row>
            <Card style={{ width: '18rem' }}>
                
                <Card.Img variant="top" src={item.imageLink} />
                
                <Col sm={8}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Card.Text>
                    {item.price}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
                </Col>
            </Card>                 
            </Row>
        </Container>   
        </>        
    );
}

export default ItemDetail;