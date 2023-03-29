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
  newTodo=req.body.item;     //body varible is automayically created and mapped to the JSON object containing item{advt of express}
  todo.push(newTodo);
  res.status(200).send({
    message:"Task added succesfully"  //printing a json object 
  });

});
app.delete("/todo",(req,res)=>{
  deleteThis=req.body.item;

  // for(let i=0;i<todo.length;i++){
  //   if(todo[i]==deleteThis){
  //     todo.splice(i,1);
  //   }
  // }

  todo.filter((element,index)=>{       //can also use find
    if(element===deleteThis){
      todo.splice(index,1);
    }
  })
    
  res.status(201).send({
    message:"Deleted successfully"
  });
   
})
app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
});
