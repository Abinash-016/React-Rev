
function Child({onIncrement}){
    return(
      <div>
        <h3>Child component</h3>
        <button onClick={onIncrement}>increment button from child</button>
      </div>
    )
}

export default Child
//props 