

let dateHandler=(request,response)=>{
    response.write(`Today is ${new Date().toLocaleDateString()}`);
}

let timeHandler=(request,response)=>{
    response.write(`Time is ${new Date().toLocaleTimeString()}`);
}

let bookListHandler=(request,response)=>{
    response.write(`Sending you a list of books`);
}



let routes={
    '/date':dateHandler,
    '/time':timeHandler,
    '/books':bookListHandler
};

module.exports=routes;