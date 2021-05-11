const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const todos = [
  { todo: "wake up", isCompleted: false },
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
  const person = { todo: todo1, isCompleted: isCompleted1 };

  todos.push(person);

  res.status(201);
  res.json(person);
});

app.put("/update/todo/:name", (req, res) => {
  let i;
  const person = { todo: req.body.todo, isCompleted: req.body.isCompleted };
  const found = todos.find((element, index) => {
    i = index;
    return element.todo === req.params.name;
  });

  if (found) {
    res.status(200);
    todos[i] = person;
    res.json(person);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});

app.delete("/delete/todo/:name", (req, res) => {
  let i; //
  const deltodo = req.params.name; //
  const found = todos.find((element, index) => {
    //
    i = index; //
    return element.todo === deltodo; //
  });
  if (found) {
    res.status(200);
    todos.splice(i, 1);

    res.json(person);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});

app.put("/complete/todo/:name", (req, res) => {
  let i;
  const todo = req.params.name;
  const found = todos.find((element, index) => {
    i = index;
    return element.todo === todo;
  });
  if (found) {
    todos[i].isCompleted = true;
    res.status(200);
    res.json(todos);
  } else {
    res.status(404);
    res.json("todo not found ");
  }
});

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
