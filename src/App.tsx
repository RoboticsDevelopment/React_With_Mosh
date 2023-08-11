import ListGroup from "./components/ListGroup";

function App() {
  let animals = ["Cat", "Dog", "Dragon", "Lizard"];
  let hobbies = [
    "Flying Drones",
    "Collecting Bullion",
    "Dreaming about Wifey",
    "Playing with Animals",
    "Eating Pizza",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item + " selected");
  };

  return (
    <div>
      <ListGroup
        items={animals}
        heading="Choose your Favorite Animal"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={hobbies}
        heading="Choose your favorite Hobby"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
