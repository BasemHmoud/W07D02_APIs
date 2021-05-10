const express=require("express");

const app=express();

const port=3000;
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 20 },
    { name: "Mark", age: 19 },
  ];

app.get("/home",(req,res)=>{
    res.send(users)
})
app.listen(port,()=>{
    console.log(`server run on ${port}`);
})