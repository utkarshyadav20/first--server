const http=require("http");

const port=8081;

http.createServer((request,response)=>{ 
     response.writeHead(200,{"Content-Type":"html"});
     response.write("<h1>This is my first server</h1>"); 
     response.end();   
})
.listen(port,()=>{ // callback function
     console.log(`Started the server on port no ${port}`);
});

// http://localhost:8081  