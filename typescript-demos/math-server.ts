import express from 'express';


import {sum,average} from './library/math';


let app=express();

app.get('/sum',(request,response)=>{
    let values=[1,2,3,4];
    let result=sum(...values);
    response.send({
        values,result,operation:'sum'
    });
});

const port=8000;
app   
    .listen(port, (err)=>{
        if(err)
            console.log('error starting server on port',port);
        else
            console.log('server started on port ',port);
    });




