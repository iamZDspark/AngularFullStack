/* To create a server we can use a buildin mode called http */

const http=require('http');  

//decide on which port your server will run
//port can be anything betwee 0-65534 (recommended 1024+)
//default for http is 80
//but only one application can run on port 80
//so its a good idea to run a development at a different port
const port= 800; //this is where my applicaiton will run


//create a server
//server will receive the http request and will send it back
//but someone must know what to do with this request
//user request will reach server in 'request' object
//you can send information to user using 'response' object
function requestHandler(request,response){


    let url=request.url;
    response.write('<h1>Welcome to Books Web</h1>');
    if(url==='/date')
        response.write(`Today is ${new Date().toLocaleDateString()}`);
    else if(url==='/time')
        response.write(`Today is ${new Date().toLocaleTimeString()}`);
    else
        response.write(`${request.url}`);
    
    response.end();
}

//now we must pass the actual handler of business logic to the server
let server= http.createServer(requestHandler); //we must tell which user code will handle the request


//ok we are set. let us start the server now

server.listen(port, error=>{
    if(error){
        console.log(  `Error starting the server: ${error.message}`);
    } else{
        console.log(  `server is now running on port ${port}`);
    }
});





