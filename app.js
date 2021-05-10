const express = require("express");

const app = express();

const port=3000;
const todos  = [
    { todo: " wake up",
     isCompleted: false 
    },
     { todo: "Eat Breakfast", 
     isCompleted: false
    }];


app.listen(port,()=>{
    console.log(`server run on ${port}`);
}) 