import { Card , Button , Col} from 'react-bootstrap';


export default function Item({ item }){
    return (

            <Card style={{ width: '18rem' }}>
                <Col sm={4}>
                <Card.Img variant="top" src={item.imageLink} />
                </Col>
                <Col sm={8}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
                </Col>
            </Card>
    );
};