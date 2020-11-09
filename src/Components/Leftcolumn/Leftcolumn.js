import React from "react";
import "./Leftcolumn.css";




const Leftcolumn=()=> {
    return (
      <div className ="layout">
      <div className="layout__column">
        <div className="column-left">
        <h1 className="column__head">React</h1>
        <div>
        <p className="top">React + Backbone.js</p>
        <p className="color">Demo, Source</p>
        </div>
       <div>
        <p className="top">Scala.js + React</p>
        <p className="color">Demo, Source</p>
        </div>
        <div>
        <p className="top">TypeScript + React</p>
        <p className="color">Demo, Source</p>
        </div>
         <div>
        <p className="top">Example</p>
        <p className="color">Demo, Source</p>
        </div>
        <div>
        <p className="top">React + Alt</p>
        <p className="color">Demo, Source</p>
        </div>
        <hr></hr>
        <div className="paragraph">
        React is a JavaScript library for
         creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.
        </div>
        <p className="top-react" >React</p>
        <hr></hr>
        <div className="resources">
          <ul className="resources-ul">Official Resources</ul>
          <li className="resources-li">tutoril</li>
          <li className="resources-li">philosaphy</li>
          <li className="resources-li">support</li>
          <li className="resources-li">flex architecture example</li>
        </div>
        <div className="resources">
          <ul className="resources-ul">Community</ul>
          <li className="resources-li">ReactJS on Stack Overflow</li>
          <li className="resources-li">Google Groups Mailing List</li>
          <li className="resources-li">IRC</li>
          </div>
          <hr></hr>
          <div className="footer">
          If you have other helpful links to share, or 
          find any of the links above no longer work, 
          please let us know.
          </div>
      </div>
      </div>
      {/* <Right/> */}
        </div>
      
    );
  }
  
  export default Leftcolumn;
  