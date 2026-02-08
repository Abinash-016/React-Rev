function Row({id, name,removeItem}){
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <button onClick={()=> {removeItem(id)}} style={{
                    backgroundColor:"red",
                    color:"white",
                    borderRadius:"5px"
                }}>Remove</button>
            </td>
        </tr>
    )
}

export default Row;