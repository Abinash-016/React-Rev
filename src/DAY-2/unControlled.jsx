import { useRef } from "react";

function uncontrolled() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("Submited Value: " + inputRef.current.value);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Something"
        style={{
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginLeft: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default uncontrolled;
