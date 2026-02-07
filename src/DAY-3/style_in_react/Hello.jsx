import "./style.css";

function Style() {
  return (
    <div>
      <div className="card">Hello there!!!!!!!</div>

      <div
        style={{
          color: "white",
          backgroundColor: "blue",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "center",
          padding:"10px",
          marginTop:"10px"
        }}
      >
        Hello
      </div>
    </div>
  );
}

export default Style;
