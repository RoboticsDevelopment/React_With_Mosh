import ListGroup from "./components/ListGroup";
import AlertX from "./components/AlertX";
import Alert2 from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");
  const [gangster, setGangster] = useState(false);

  let animals = ["Cat", "Dog", "Dragon", "Lizard"];
  let pool = ["Noodle", "Wasp", "Towel", "Floatie"];
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
      { alertVisible && <Alert2 onClose={()=> setAlertVisibility(false)}>Chicken Butt!</Alert2>}
      <Button color ="primary" onClick={()=> setAlertVisibility(true)}>Guess What?</Button>

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


      <Button color ="primary" onClick={()=> setAlertVisibility(true)}>Don't Push me Bro!</Button>
      { alertVisible && <Alert2 onClose={()=> setAlertVisibility(false)}>Now you done it!</Alert2>}

      
    </>
  );
}

export default App;
