const mongoose= require('mongoose');

//creating a model and userschema to reduce the coding in index.js
const TodoSchema= new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
 })
const TodoModel=mongoose.model("todos", TodoSchema)  //recipes is the table/collection name
module.exports= TodoModel