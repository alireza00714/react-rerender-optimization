import { useEffect, useState } from "react";

const List = ({getItems}) => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        console.log("Updating Items");
        setItems(getItems())
    },[getItems])

    return items.map(item => (<span key={item}>{item}</span>))
    
}

export default List;