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

    app.get("/todos", (req, res) => {
        res.status(200);
        res.send(todos);
      });
app.listen(port,()=>{
    console.log(`server run on ${port}`);
}) 