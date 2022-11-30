import React, {useState} from "react";
 
function Components() {
    const [state, setState] = useState("state")
    const [todo, setTodo] = useState(["first to-do", "seond to-do"])

    const handleClick = () => {
        setTodo((curr)=>([...curr, state]))
        setState("")
    }
  return(
    <div className="content">
      <h3>What are our plans for today?</h3>
      <form className="todo-form">
        <input
        onChange={(e)=> setState(e.target.value) }
        type="text"
        placeholder="Enter a Task"
        className="Tasks" />
        <button 
        className="addButton" 
        type="submit"
        onClick={handleClick}>Add</button>
      </form>
      <h1>TO-DO LIST</h1>
      {
        todo?.map((item)=> (
            <div className="to-do-card">
                <p className="to-do-item">{item}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Components;  