import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter using usestate</h2>
      <p>Value: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
    </div>
  );
};

export default Counter;
// state