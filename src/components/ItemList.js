import {Container, Row } from 'react-bootstrap';
import Item from './Item';


export default function ItemList({ products }){
    return(
        <Container className="mt-3">
        <Row>
            {
                products.map((product)=>{
                    return (
                        <Item key={product.id} item={product} />
                    );
                })     
            }
        </Row>
        </Container>
    );
};