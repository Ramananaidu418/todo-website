import React,{useState} from 'react';
// import React from "react";
import "./Todolist.css"
import empty from "../../Images/radio_button_unchecked-24px.svg";
import filled from "../../Images/check-24px.svg";
import highlight_off from "../../Images/highlight_off-24px.svg";
const Todolist = (props)=>{
    const [hover,setHover] = useState(false)
    return(
        
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className = "todolist">
          <div onClick={()=>props.toggleSelect(props.todoobj)} className="todolist__icon">
          {!props.todoobj.selected?<img src = {empty}/>:
          <img src = {filled}/>}


            </div>
            <div className="todolist__todo">
            <p className="todo__text">{props.todoobj.todo}</p>
            </div>
            <div className = "todolist__close" onClick = {()=>props.removetodo(props.todoobj)}>
               {hover?<img src = {highlight_off}></img>:null} 
            </div>
            
        
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
