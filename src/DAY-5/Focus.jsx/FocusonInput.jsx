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

    const addItem=(e)=>{
        e.preventDefault();

        const value=inputRef.current.value.trim();
        if(!value) return ;

        setItems([...items,value]);

        inputRef.current.value="";
        inputRef.current.focus();

    }

    const handleSearch=(e)=>{
      e.preventDefault();
        setSearchTerm(searchReef.current.value)
    };

    const filteredItems=items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return(
    <div className="container">
        <h1>Focus input element</h1>

         <form className="section" onSubmit={addItem}>
        <input
          ref={inputRef}
          placeholder="Add new item..."
        />
        <button onClick={addItem}>Add</button>
      </form>

      {/* Search Section */}
      <form className="section"  onSubmit={addItem}>
        <input
          ref={searchReef}
          placeholder="Search items..."
        />
        <button onClick={handleSearch}>Search</button>


      </form>
      
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