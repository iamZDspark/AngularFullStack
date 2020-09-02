/* To create a server we can use a buildin mode called http */

const http=require('http');  
const {createStaticRequestHandler,createRouteHandler} =require('./webutils');
const routes=require('./app'); //get all application route




const port= 800; //this is where my applicaiton will run
const PUBLIC_DIRECTORY_ROOT='./public';


let handleStaticRequest=createStaticRequestHandler(PUBLIC_DIRECTORY_ROOT);

let handleRoute=createRouteHandler(routes); //attach your business url handler here





async function  requestHandler(request,response){

    if(request.url==='' || request.url==='/')
        request.url='/index.html' //set the default home page

    if(await handleStaticRequest(request,response))
        return; //request handled. work is done

    if(!await handleRoute(request,response)){
        
        //request is not handled by anyone.
        response.writeHead(404); //change status to 404
        console.log('serving 404');
        request.url='/error404.html'; //change url to error404.html
        await handleStaticRequest(request,response); //serve the static page
        return ;
    }
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





