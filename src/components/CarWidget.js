import ItemCount from "./ItemCount"

const onAddItem= (itemCount)=>{
    alert(itemCount);
}

const CarWidget =()=>{
    return(
        <ItemCount stock={10} initial={1} onAdd={onAddItem} />
    )
}
export default CarWidget