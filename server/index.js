const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const TodoModel = require('./Models/Todo')

const app=express();
app.use(cors())  //whenever we pass data it will be converted to the json format
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/Todo");
//creating API to access data from this db
app.get('/get', (req,res) => {
    TodoModel.find()
        .then(result=>res.json(result))
        .catch(err => res.json(err))
    })


//creating the add route coming from create.jsx
app.post('/add', (req,res)=>{
    const task= req.body.task; //task that is sent from create.jsx. value taken from body
    TodoModel.create({task:task})
        .then (result => res.json(result))
        .catch(err => res.json(err))
})

//serverside api edit route
app.put('/update/:id', (req,res) =>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})   //Model.findByIdAndUpdate(id, update, options, callback)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req,res) => {
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("server is running");
})