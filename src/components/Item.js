import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Item({ item }){
    return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageLink} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
    );
};