import React from "react"
 export const Todoitem = ({todos, ondelete,sno}) =>{
    return(
        <div>
           <h4>{todos.name1}</h4>
           <p>{todos.job}</p>
           <button type="" className="btn btn-danger" onClick={() =>{ondelete(todos)}}>Delete</button>
        </div>
    )
 }