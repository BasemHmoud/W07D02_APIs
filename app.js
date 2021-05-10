/*
      app.post("/create/todo",(req,res)=>{
          const todo1=req.body.todo;
          const isCompletede1=req.body.isCompleted
          const add={todo:todo1,isCompleted:isCompletede1}
          todos.push(add)
          res.status(201);
          res.json(add);
      })
      
app.listen(port,()=>{
    console.log(`server run on ${port}`);
}) */
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const todos = [
  { todo: " wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

app.get("/todos", (req, res) => {
  res.status(200);
  res.send(todos);
});

app.post("/create/todo", (req, res) => {
  const todo1 = req.body.todo;
  const isCompleted1 = req.body.isCompleted;
  // const user = { name: name, age: age };
  const person = { todo:todo1, isCompleted:isCompleted1 };

  todos.push(person);

  res.status(201);
  res.json(person);
});

app.listen(port, () => {
  console.log(`server run on ${port}`);
});
