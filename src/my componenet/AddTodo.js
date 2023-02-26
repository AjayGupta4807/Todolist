import React, { useState } from 'react'


const AddTodo = (props) => {
  const [name1,setname1] = useState("");
  const [job,setjob] = useState("");
  
const submit = (e)=>{
  e.preventDefault();
  if(!name1 || !job){
    alert("name1 and job can not be empty");
  }
 else {
  props.addTodo(name1,job);
  setname1("");
  setjob("");
 }
}
  return (
    <>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="name1" className="form-label">Email address</label>
    <input type="text" value={name1} onChange = {(e)=> setname1(e.target.value)} className="form-control" id="name1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="job" className="form-label">Password</label>
    <input type="text" value={job} onChange = {(e)=> setjob(e.target.value)}  className="form-control" id="job"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default AddTodo
