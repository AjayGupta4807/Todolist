import React from 'react'
import { Todoitem } from './Todoitem'
export const Todos = (props) => {
  return (
    <div className='container'>
        {/* <h3>Todo list</h3> */}
        {props.todos.length ===0 ? " no todo to display": 
        props.todos.map((todos)=>{
            return( <Todoitem todos = {todos} key ={todos.sno} ondelete = {props.ondelete}></Todoitem>)
        })
        }
    </div>
  )
}

// export default Todos
