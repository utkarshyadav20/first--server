// const http=require("http");  //package export and save

// const port=8081;     //making a local port

// http.createServer((request,response)=>{ 
//      response.writeHead(200,{"Content-Type":"html"});      //metadata about the type of response
//      response.write("<h1>This is my first server</h1>"); //  response 
//      response.end();     //ending the response
// })
// .listen(port,()=>{ // callback function     //listen function to tell which port to connect to
//      console.log(`Started the server on port no ${port}`);    
// });

// http://localhost:8081 





  //Software similar to thunder client imp{insomnia,postman}




const http=require("http");  //package export and save

const port=8081;     //making a local port
const todo=["Water plants","do dsa","Do web dev"];
http.createServer((request,response)=>{ 
    const {method,url}=request;
//     console.log(method,url);
//     response.end();
   if(url==="/"){
      
     response.writeHead(200,{"Content-Type":"html"});      //metadata about the type of response
     response.write("<h1>This is my first server</h1>"); //  response 
     response.end();     //ending the response
   }
  else if(url==="/todo"){
      if(method==="GET"){
          response.writeHead(200,{"Content-Type":"text/html"}) ;
          response.write(`<h1>${todo.toString()}</h1>`);
          response.end(); 
      }
      else if(method==="POST"){
        let content="";
        request
            .on("error",(err)=>{
              console.err(err);
            })
            .on("data",(chunk)=>{
                  content+=chunk;
                  // console.log(chunk);     //Coneverted to buffer for faster transportation across network
            })
            .on("end",()=>{
              // console.log(content);    //Printing the data as it is
              content=JSON.parse(content);
              // console.log("DATA: ",content);   //Converting the data to JSON fromat
              let newTodo=todo;
              newTodo.push(content.Task);
              console.log(newTodo);
              response.writeHead(201);
              
            });
            
            response.writeHead(200);
            response.end();
          }
      else if(method==="DELETE"){
        
        let content="";
        request
        .on("error",(err)=>{
           console.log(err)
        })
        .on("data",(chunk)=>{
          content+=chunk;
        })
        .on("end",()=>{
          content=JSON.parse(content);
          let deleteThis=content.item;
          for(let i=0;i<todo.length;i++){
             if(todo[i]===deleteThis){
              todo.splice(i,1);
              break;
             }
          }
          response.writeHead(204);
          response.end();
        })
      }
      else{
        response.writeHead(501);
        response.end();
      }
   }
   else{
      response.writeHead(404);
      response.end();
   }
  

     //ending the response
})
.listen(port,()=>{ // callback function     //listen function to tell which port to connect to
     console.log(`Started the server on port no ${port}`);    
});