import Child from "./Child";

function Parent(){
  const name="Abinash";
  const role="react-dev"
  return(
    <div>
      <Child name={name} role={role} />
    </div>
  )
}

export default Parent ;

//props