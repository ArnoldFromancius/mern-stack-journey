import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h2>{heading}</h2>
            <ul className="list-group">

                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => setSelectedIndex(index)} key={item}>{item}</li>
                ))};

            </ul>
        </>
    );
}

export default ListGroup;