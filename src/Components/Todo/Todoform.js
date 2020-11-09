import React, { useState } from "react";
import Todolist from "../todoItem/Todolist";
import "./Todoform.css";
import Todobutton from "../Todobutton/Todobutton.js";
import arrow_drop_down from "../../Images/arrow_drop_down-24px.svg";

const Todoform = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  // const [backup,setBackup] = useState([]);
  const [filter,setFilter] = useState("All");
  const [selectall,setselectall] = useState(false)

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let temp = [...todos];
    temp.unshift({ todo: input, selected: false });
    setTodos(temp);
    setInput("");
  };

  const toggleSelect = (per) => {
    let temp = [];
    todos.map((i) => {
      if (i.todo === per.todo) {
        temp.push({ todo: i.todo, selected: !i.selected });
      } else {
        temp.push(i);
      }
    });
    setTodos(temp);
  };

  const removetodo = (per) => {
    let temp = [];
    todos.map((i) => {
      if (i.todo === per.todo) {

      }else{
        temp.push(i);
      }
    });
    setTodos(temp);
  };
  const clearcomplete = () => {
    setTodos([]);
  }
  //   const toggleSelect = (per) =>{
  //     let temp =[];
  //     todos.map((obj)=>{
  //       if(obj.todo===per.todo){
  //   temp.push({todo:per.todo,selected:!per.selected})
  // } else{
  //   temp.push(per)
  // }   })
  // setTodos(temp);

  //   }
// const handleActiveBtn = ()=>{
//   setBackup([...todos]);
//   let temp = [];
//   todos.map((i) => {
//    if(i.selected===false){
//      temp.push(i)
//    }

//   });
//   setTodos(temp);
// }
// const handleCompletedBtn = ()=>{
//     // setTodos([...backup]);
//     let temp = [];
//   backup.map((i) => {
//    if(i.selected===true){
//      temp.push(i)
//    }

//   });
//   setTodos(temp);

// }

const createList=(per)=>{
  if(per==="All"){
    return [...todos]
  }else if(per==="Active"){
    let temp = [];
    todos.map((i)=>{
      if(i.selected===false){
        temp.push(i);
      }
    })
    return temp;
  }else{
    let temp = [];
    todos.map((i)=>{
      if(i.selected===true){
        temp.push(i);
      }
    })
    return temp;

  }
}
 const selectalltodos = () =>{
   let temp = [];
   todos.map((i)=>{
     temp.push({todo:i.todo,selected:!selectall})

   })
   setTodos(temp);
   setselectall(!selectall)
}

  return (
    <div>
      <div className = "searchbar">
        <div onClick={selectalltodos} className="search__iconHolder">
          <img src={arrow_drop_down} />
        </div>
        <div >
          <form className="example" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="To Do List"
              name="search"
              value={input}
              name="text"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      {createList(filter).map((per) => {
        return (
          <Todolist
            key={per.todo}
            removetodo={removetodo}
            toggleSelect={toggleSelect}
            todoobj={per}
          />
        );
      })}
      <Todobutton setFilter={setFilter} clearcomplete = {clearcomplete} length ={todos.length}/>
    </div>
  );
};

export default Todoform;
