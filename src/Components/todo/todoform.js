import React, {useState} from "react";
import Todolist from "./todolist";
import "./todoform.css";


const Todoform=(props)=> {
  
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const handleChange=e=>{
      setInput(e.target.value);
    }
    const handleSubmit =e=>{
      e.preventDefault();
  
      let temp = [...todos];
      temp.unshift(input)
      setTodos(temp);
      setInput("");

    // props.onSubmit({
    //   text:input
    // });
  };
      return (
        // <div className="wrapper">
        // <div className="header">
        //   <h1>todos</h1>
        <div>          <div className="searchbar">
         <form className="example" onSubmit ={handleSubmit}>
    <input type="text" placeholder="To Do List" name="search" value={input} name="text"
    onChange={handleChange}/>
    
  </form>
  </div>
 { todos.map((per)=>{
    return <Todolist text = {per}/>;
  })}
  {/* <Todolist/>
  <Todolist/>
  <Todolist/>
  <Todolist/> */}
      </div>

    );
  }
  
  export default Todoform;