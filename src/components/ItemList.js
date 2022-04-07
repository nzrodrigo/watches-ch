import { Col, Row } from 'react-bootstrap';
import Item from './Item';


export default function ItemList({ products }){
    return(

        <div>
            {
                products.map((product)=>{
                    return (
                        <Item key={product.id} item={product} />
                    );
                })
                
            }
        </div>
    );
};