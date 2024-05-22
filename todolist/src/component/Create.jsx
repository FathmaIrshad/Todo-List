import React,{useState} from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState();  //variable to store the task to the task variable and update with UseState. SetTask is the method to capture the value.
  const handleAdd = () => {
    axios.post('http://localhost:3001/add',{task:task})   //task variable posted to task column in table
    .then(result => location.reload())   //to automatically update the page
    .catch(err => console.log(err))
  }

//whenever this button clicked a new record shoudl be added to the db
  return (
    <div className='create_form'>
  
        <input type="text" placeholder=" Enter a Task" onChange={(e)=>setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create