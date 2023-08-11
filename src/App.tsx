import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
    <>
      <ListGroup
        items={animals}
        heading="Choose your Favorite Animal"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <i>World!</i>
      </Alert>
      <Button
        onClick={() => console.log("Primary Button Clicked!")}
        color="primary"
      >
        Don't Push Me <b>Bro!</b>
      </Button>

      <ListGroup
        items={hobbies}
        heading="Choose your favorite Hobby"
        onSelectItem={handleSelectItem}
      />

      <Button
        onClick={() => console.log("Warning Button Click")}
        color="warning"
      >
        Push Me <b>Bro!</b>
      </Button>
    </>
  );
}

export default App;
