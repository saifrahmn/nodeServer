const express = require('express');
const app = express();

app.use('/', (req,res) => {
    res.send("we will receive the response here");
})

app.get("/hello", (req,res,next) => {
    console.log("This is the hello response");
})

app.listen(3000,()=>{
    console.log("your are at the 3000 server");
})