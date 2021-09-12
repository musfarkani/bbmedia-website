import './App.css'
import {useState} from 'react'
function App() {
  const [toDos,setToDos] = useState([])
  const [ToDo,setToDo] = useState('')
    return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDos} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus"></i>
      </div>
      <div className="toDos">
        <div className="toDo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>React Todo Note</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
