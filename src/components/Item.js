import { Card , Button , Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Item({ item }){
    return (
        <Col className='lg-4'>
            <Card style={{ width: '18rem' }} className='mb-3 text-center'>
                <Image src={item.imageLink} alt={item.title} fluid className="card-img-top" style={{width:500 , height:300}}/>
                <Card.Body>
                    <Card.Title >{item.title}</Card.Title>
                    <Button className="my-3" variant="secondary" as={Link} to={`/item/${item.id}`}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};