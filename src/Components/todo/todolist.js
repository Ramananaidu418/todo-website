// import React,{useState} from 'react';
import React from "react";
import "./todolist.css"
const Todolist = (props)=>{
    return(
        
        <div className = "todolist">
          <div className="todolist__icon">
        icon
            </div>
            <div className="todolist__todo">
            <p className="todo__text">{props.text}</p>
            </div>
            <div className = "todolist__close">X</div>
            
        
        </div>
    )
}
export default Todolist;

// function Todolist() {
//     // const [todos,setTodos]=useState([]);
//     // const addtodo = todo =>{
//     //     const newtodos =[todo,...todos];
//     //     setTodos(newtodos);

    
//     return (
//         <div className = "todolist">
//           <div className="todolist__icon">
//         icon
//             </div>
//             <div className="todolist__todo">
//                 <p className="todo__text">todo</p>
//             </div>
//             <div className = "todolist__close">X</div>
            
//         </div>
//     )
// }

// export default Todolist
