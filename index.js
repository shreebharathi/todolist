const express= require('express')
const mongoose= require('mongoose')

const app= express()
app.use(express.json())
mongoose.connect('mongodb://localhost:127.0.0.1:27017')
app.post('/add',(req,res =>(
    const task=req.body.task;
)))
app.listen(3001, ()=> {
    console.log("Server is running")
})