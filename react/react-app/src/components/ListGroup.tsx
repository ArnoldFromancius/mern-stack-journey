import { useState } from "react";

function ListGroup() {
    let items = ['fridge', 'washing machine', 'stove', 'geyser', 'Genset', 'sink', 'bathtub'];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
        <ul className="list-group">
            
            {items.map((item, index) => (
                <li className={selectedIndex === index ? "list-group-item active": "list-group-item"} onClick={() => setSelectedIndex(index)} key={item}>{item}</li>
            ))};
            
        </ul>
    );
}

export default ListGroup;