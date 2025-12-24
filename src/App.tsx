import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New Kutus", "San Nanyuki", "Kisumu", "Nyeri", "Lamu"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      /*look's for ListGroup component and render whatever ListGroup returns.*/
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
