// import logo from './logo.svg';
import './App.css';
import Header from "./my componenet/Header";
import {Todos} from "./my componenet/Todos";
import {Footer} from "./my componenet/Footer";
// import {AddTodo} from "./my componenet/AddTodo";
import AddTodo from "./my componenet/AddTodo";

import React, {useEffect, useState} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete=(todo) =>{
    console.log("i am on deleteeeeeeeeeawawawawweweeeeeeeeeeeee", todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }

const addTodo = (name1,job)=>{
  console.log("i am adding this todo", name1,job)
  let sno;
  if(todos.length=== 0){
    sno = 0;
  }
  else{
  sno = todos[todos.length-1].sno +1;
  }
  const myTodo = {
    sno: sno,
    name1: name1,
    job: job
  }
  setTodos([...todos, myTodo])
  console.log(myTodo);
}

  const [todos, setTodos] = useState([]);
  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return(
  <>
  <Header title = "my todo list"/>
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} ondelete= {ondelete}/>
  <Footer/>
  </>
  );
}


export default App;

