const express = require('express')
const app = express()
const port = 3000


// routes
app.get('/hello',(req,res)=>{
    res.send("Task Manager app")
})


app.listen(port ,()=>{
    console.log(`The app has started on port ${port}`)
})