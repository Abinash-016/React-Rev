const baseStyle={
    padding:"5px",
    borderRadius:"17px"
}

const dangerStyle={
    backgroundColor:"red",
    color:"white"
}

function SpreadOperator(){
    return (
        <div>
            <h1>Spread operator </h1>
        <button style={{...baseStyle, ...dangerStyle}}>
            Delete
        </button>
        </div>
    )
}

export default SpreadOperator