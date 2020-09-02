
/*
to use express you need to use : npm install express
*/

//step 1: get express library
let express=require('express');

//step2: create an express app
let app= express(); 

//step 3: define the port
const PORT= process.env.BOOKSWEB_PORT || 80;

//Step 4: define Route Handlers

app.use((request,response,next)=>{
    if(request.url==='/admin'){
        response.status(403); //forbidden
        response.send();
        //response.send('you can not make this request');
    } else{
        next();
    }
        
});

app.get('/datetime',(request,response)=>{
    let date=new Date();
    response.send({
        date:date.toLocaleDateString(),
        time:date.toLocaleTimeString()
    });
});

app.get('/date', (request,response)=>{
    let date=new Date();
    response.send(`Today is ${date.toLocaleDateString()}`);
});

app.get('/welcome',(request,response)=>{
    response.send('Welcome to Books Web Server');
});

app.get('/end',(request,response)=>{
    response.end('hello world using response.end');
});

app.get('/write',(request,response)=>{
    response.write('hello world using response.write');
    response.write('writeline2 using response.write');
});

app.get('/end2',(request,response)=>{
    response.end('hello world using response.end');
    response.end('end line 2 using response.end');
});


app.get('/write-end',(request,response)=>{
    response.write('hello world using response.write');
    response.end('end line 2 using response.end');
});


app.get('/send',(request,response)=>{
    response.send('hello world using response.send');
    
});

app.get('/send2',(request,response)=>{
    response.send('hello world using response.send');
    response.send('second line send using response.send')
    
});



app.use((request,response,next)=>{
    console.log(`request for ${request.url}`);
    if(request.url==='' || request.url=='/')
        request.url='/home.html';

    next(); //pass the request to next item
});

//serve the static files
app.use(express.static('public'));

//step 5: start listening for request

app.listen(PORT, (error)=>{
    if(error)
        console.log(`error starting application on port ${PORT} : ${error.message}`);
    else
        console.log(`server started on port ${PORT}`);
});




