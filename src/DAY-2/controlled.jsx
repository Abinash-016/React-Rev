import { useState } from "react";

function ControlledComp() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name:"
      />

      <p>Typed: {name}</p>
    </div>
  );
}

export default ControlledComp;