import { useState } from "react";
import Child from "./Child";

function Parent(){
  const[count,setCount]= useState(0);
  const increment=() =>{
    setCount(count+1);
  }

  return(
    <div>
      <h2>Parent component</h2>
      <p>count in parent: {count}</p>
      <Child onIncrement={increment} />
    </div>
  )
}

export default Parent ;

//props