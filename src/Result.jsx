import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import "./App.css"


const Result = ({todo, setTodo}) => {
    // const [todo, setTodo] = useState(["First to-do", "Second to-do"])

    const deleteItems = (val) =>{
        const newArray = todo.filter((list)=> list !== val);
        console.log(newArray)
        setTodo(newArray)
    }

  return (
    <div className='Result'>
              <div className="result">
      <h1>TO-DO LIST</h1>
      {todo?.map((item)=>(
            <div className="to-do-card">
                
                <p className="to-do-item">{item}</p>
                <button 
                className="delete-button" 
                onClick={()=>{deleteItems(item)}}
                > <MdDeleteOutline /> </button>
              
            </div>
            
            ))}
        
    </div>
    </div>
  )
}
export default Result;