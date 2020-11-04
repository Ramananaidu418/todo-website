import logo from './logo.svg';
import './App.css';
import Leftcolumn from "./Components/Leftcolumn/Leftcolumn.js"
import Right from "./Components/Rightcolumn/Right.js"

 
const App=()=> {
  return (
    <div className="App">
     <Leftcolumn/>
     <Right/>
    </div>
  );
}

export default App;
