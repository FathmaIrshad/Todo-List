import { useState, useEffect} from 'react';
import react from 'react';
import Create from './Create';
import axios from 'axios';
import { CheckCircle, Trash } from 'react-bootstrap-icons';
import { Circle } from 'react-bootstrap-icons';

function Home() {
  const[todos, setTodos] = useState([]);   //to display the todos

 useEffect(()=> {         //useEffect has 2 parts-callback function and array dependency
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
 },[])


const handleEdit = (id) => {
  axios.put('http://localhost:3001/update/'+id)
  .then(result => {location.reload()})  //to automatically update the page and shoe result
  .catch(err => console.log(err))
}

const handleDelete = (id) => {
  axios.delete('http://localhost:3001/delete/'+id)
    .then(result => {location.reload()})
    .catch(err => console.log(err))
}
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      <br/>
      {
        todos.length === 0? <div><h2>No Record</h2></div>         //checking if todo list is empty. if yes no record else fill it
        :
        todos.map(todo => (     //to display the todos
          <div className='task'> 
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
              {todo.done ?  <CheckCircle className='icon'></CheckCircle> : <Circle size={15} className='icon'></Circle> }
              
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p> 
            </div>
            <div>
              <span><Trash size={25} className='icon' onClick={() =>handleDelete(todo._id)}/></span> 
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home