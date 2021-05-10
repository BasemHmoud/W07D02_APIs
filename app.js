const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { name: "Ali", age: 30 },
  { name: "Ala", age: 20 },
];

app.get("/home", (req, res) => {
  res.status(200);
  res.json("hi from server");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users", (req, res) => {
  res.status(200);
  res.send(users);
});

app.post("/create/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
    // const user = { name: name, age: age };
    const person = { name, age };

  users.push(person);

  res.status(201);
  res.json(person);
});
app.post("/first-user", (req, res) => {
    const fu=users[0];
    res.json(fu);
  
   
  });
//params
app.get("/user/:x",(req,res)=>{
    const person_name = req.params.x

    res.json(person_name);
})



//query
app.get("/user",(req,res)=>{
    const person_name = req.query.x
    // const age = req.query.age
    let i;
    const found = users.find((element,index)=>{
        i=index;
        return element.name=== person_name;
    })

    if(found){
        res.status(200);
        res.json(i)
    }
    else{
        res.status(404);
        res.json("user not found")
    }

    
})


app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
// بالنسبة للسوال الخامس في حال تشغيل السيرفر على المتصفح 
//سوف يقوم باخراج hello world
// لا يختلف المتصفح عن postman