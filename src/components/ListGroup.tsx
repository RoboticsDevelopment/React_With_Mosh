function ListGroup() {
  const hobbies = [
    "Flying Drones ",
    "Collecting Bullion",
    "Thinking about Girlfriend",
    "Playing with Animals",
    "Eating Pizza",
  ];
  return (
    <>
      <h1>Patricks Hobbies</h1>
      <ul className="list-group">
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
