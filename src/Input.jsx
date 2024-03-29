import React, {useState} from "react";
import Result from "./Result";
import Swal from 'sweetalert2'

 
function Input() {
    const [state, setState] = useState("")
    const [todo, setTodo] = useState(["First task", "Second task"])

    const handleClick = () => {
        setTodo((curr)=>([...curr, state]))
        setState("")
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your todo has been added to cart...',
          showConfirmButton: false,
          timer: 1300
        })
    }

    const handleChange = (event) => {
      setForm(prevForm =>(
        {...prevForm,
        firstName : firstName.current.value}
        ))
    }
    
  return(
    <div className="content">
        <div className="input">
        <h3>What are our plans for today?</h3>
        <input
        value={state}
        onChange={(e)=> setState(e.target.value) }
        type="text"
        placeholder="Enter a Task"
        className="Tasks" />
        <button 
        className="addButton" 
        type="submit"
        onClick={ handleClick}
        >Add</button>
      </div>
      <Result todo={todo} setTodo={setTodo}/> 
    </div>
  )
}

export default Input;  