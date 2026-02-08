import { useEffect,useRef, useState } from "react"
import "./styles.css"

function Focus(){
    const [items,setItems]= useState([
        "Learn React",
        "Practice useRef"
    ])

    const inputRef=useRef(null);
    const searchReef=useRef(null);

    const [searchTerm, setSearchTerm]=useState("");

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const addItem=()=>{
        const value=inputRef.current.value.trim();
        if(!value) return ;

        setItems([...items,value]);

        inputRef.current.value="";
        inputRef.current.focus();

    }

    const handleSearch=()=>{
        setSearchTerm(searchReef.current.value)
    };

    const filteredItems=items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return(
    <div className="container">
        <h1>Focus input element</h1>

         <div className="section">
        <input
          ref={inputRef}
          placeholder="Add new item..."
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* Search Section */}
      <div className="section">
        <input
          ref={searchReef}
          placeholder="Search items..."
        />
        <button onClick={handleSearch}>Search</button>


      </div>
      
      {/* List Section */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Focus;