import { useState } from "react";
import Row from "./Row";

function Loop() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Day 4: Loop & Key Practice</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fruit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <Row
              key={item.id}
              id={item.id}
              name={item.name}
              removeItem={removeItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loop;
