
function ListGroup() {
    let items = ['fridge', 'washing machine', 'stove', 'geyser', 'Genset', 'sink', 'bathtub'];
    let selectedIndex = 0;
    return (
        <ul className="list-group">
            
            {items.map((item, index) => (
                <li className={selectedIndex === index ? "list-group-item active": "list-group-item"} onClick={() => console.log(item)} key={item}>{item}</li>
            ))};
            
        </ul>
    );
}

export default ListGroup;