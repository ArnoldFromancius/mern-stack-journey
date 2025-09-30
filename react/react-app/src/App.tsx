import './App.css'
import Message from './Message';
import ListGroup from './components/ListGroup';

function App() {

  const items = ['fridge', 'washing machine', 'stove', 'geyser', 'Genset', 'sink', 'bathtub'];
      
  return (
    <>
      <Message />;
      <ListGroup items={items} heading={'Appliances'} />;
    </>
  );

}

export default App;
