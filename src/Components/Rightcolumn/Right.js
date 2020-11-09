import React,{useState} from "react";
import"./Right.css";
import Todoform from "../Todo/Todoform";
import todoItem from "../todoItem/Todolist";


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
      <div className="wrapper__header">
        <h1>todos</h1>
      </div >
      <div className= "todo__wraper">
      <Todoform/>
      <todoItem/>
      </div>
      </div>
    );
  }
  
  export default Right;
  