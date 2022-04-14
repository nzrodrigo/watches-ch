import {Container, Row } from 'react-bootstrap';
import Item from './Item';


export default function ItemList({ products }){
    return(
        <Container className="mt-5 justify-content-center d-flex align-items-center h-100">
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