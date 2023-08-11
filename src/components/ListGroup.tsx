//import { MouseEvent } from "react";
import { useState } from "react";

//PROPS: Input passed to a component!  Similar to function args!  Immutable
//STATE: Data managed by a component!  Similar to local variables!  Mutable

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => console.log(event); //Event Handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //Each child in a list should have a unique "Key" prop!
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
