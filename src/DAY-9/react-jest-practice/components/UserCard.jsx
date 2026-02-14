import { useState } from "react";

function Day9({ name = "Abinash", initialAge = 21, onAgeChange }) {
  const [age, setAge] = useState(initialAge);

  const handleIncrease = () => {
    const newAge = age + 1;
    setAge(newAge);

    if (onAgeChange) {
      onAgeChange(newAge);
    }
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <p data-testid="age">Age: {age}</p>

      {age >= 30 && <p>Senior Developer </p>}

      <button onClick={handleIncrease} disabled={age > 50}>
        Increase Age
      </button>
    </div>
  );
}


export default Day9;