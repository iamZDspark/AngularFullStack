
let fs=require('fs');



/* 
    routes is a set of path with corresponding handlers 
    routes is  dictionary where key is the url
    and value is request handler function
*/


function createRouteHandler(routes){

    return function(request,response){

        return new Promise((resolve,reject)=>{

            let url=request.url;
            let handler=routes[url]; //is there a handler for the url

            if(!handler)
                resolve(false);
            else{
                
                handler(request,response);
                resolve(true);
            }


        });
    }
}




function createStaticRequestHandler(basePath){

    return function handleStaticRequest(request,response){

        return new Promise((resolve,reject)=>{

            let fullPath=`${basePath}${request.url}`;
            fs.exists(fullPath, exists=>{
                if(!exists)
                    resolve(false); //i can't handle this request
                else {
                    fs.createReadStream(fullPath).pipe(response); //response is a output stream
                    resolve(true);
                }
            });

        });        

    }
}


module.exports={
    createRouteHandler,
    createStaticRequestHandler
}