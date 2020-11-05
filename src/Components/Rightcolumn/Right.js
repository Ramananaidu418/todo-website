import React,{useState} from "react";
import"./Right.css";
import Todoform from "../todo/todoform";


const Right=(props)=> {
//   const [input,setInput] = useState("");
//   const handleChange=e=>{
//     setInput(e.target.value);
//   }
//   const handleSubmit =e=>{
//     e.preventDefault();

//   props.onSubmit({
//     text:input
//   });
// }
    return (
      <div className="wrapper">
      <div className="header">
        <h1>todos</h1>
      </div >
      <div className= "todo__wraper">
      <Todoform/>

      </div>
      </div>
    );
  }
  
  export default Right;
  