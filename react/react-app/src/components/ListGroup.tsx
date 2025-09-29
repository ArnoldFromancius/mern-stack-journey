
function ListGroup() {
    let items = ['fridge', 'washing machine', 'stove', 'geyser', 'Genset', 'sink', 'bathtub'];

    return (
        <ul className="list-group">
            
            {items.map((item) => (
                <li className="list-group-item" onClick={() => console.log(item)} key={item}>{item}</li>
            ))};
            
        </ul>
    );
}

export default ListGroup;