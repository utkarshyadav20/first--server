const express=require('express');
const app=express(); //initializing for  using express methods

app.use(express.json());


const port=8081;     //making a local port
const todo=["Water plants","do dsa","Do web dev"];
app.get("/",(req,res)=>{
  res.status(200).send (`<h1>first server expresss</h1>`);
})
app.get("/todo",(req,res)=>{
    //callback
  res.status(200).send(`<h1>${todo}</h1>`);
  //  res.send('Utkarsh');
});
app.post("/todo",(req,res)=>{
  newTodo=req.body.item;
  todo.push(newTodo);
  res.status(200).send({
    message:"Task added succesfully"
  });

});
app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
});
