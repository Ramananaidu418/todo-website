import React from 'react'
import "./Todobutton.css";

function  Todobutton(props) {
    return (
        // <div>
             <div className = "buttonlist">
          <div className="buttonlist__itemsleft">
          {props.length}items
            </div>
            <div className="buttonlist__all">
            {/* <p className="todo__text">{props.text}</p> */}
            </div>
            <div className="filterbuttons">
            <div className = "buttonlist__all" onClick={()=>props.setFilter("All")}><p className="buttond__p">All</p></div>
            <div className = "buttonlist__active" onClick={()=>props.setFilter("Active")}><p className="buttond__p">Active</p></div>
            <div className ="buttonlist__complete" onClick={()=>props.setFilter("Completed")} ><p className="buttond__p">complete</p></div>
            </div>
            
            <div className ="buttonlist__clear" onClick ={props.clearcomplete}><p className="buttond__p">clearcompleted</p></div>
        </div> 
        // </div>
    )
}

export default  Todobutton;
