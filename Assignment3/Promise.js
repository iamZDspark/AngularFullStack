// var promise = new Promise(function(resolve,reject){

//     if(false){
//         resolve("hello world");
//     }
//     else{
//         reject("error");
//     }

// });


// promise.then(
//     function(message){
//     console.log(message);
// },
// function(error){
//     console.log(error);
// },

//);

var Author1 ={

    Id:1,
    Name:"swati",
    Biography:"female",
    Birthdate:"",
    Email:"Swatbhagtani178@gmail.com",
    PhotographUrl:"adgfcgc",
    Book: new Array(),
    };

    var Author2= {
        Id:2,
    Name:"swati2",
    Biography:"female",
    Birthdate:"",
    Email:"Swatbhagtani178@gmail.com",
    PhotographUrl:"adgfcgc",
    Book: new Array(),
    
    };
    var Book1 = {
    
        Id:1,
        Title:"Wings of Fire",
        CoverPageUrl:"khhjj",
        Author:"APJ Abdul Kalam",
        Price:900,
        Rating:5,
        
        };
        
        var Book2= {
        
            Id:2,
            Title:"Andha Yug",
            CoverPageUrl:"khhjj",
            Author:"Dharamvir Bharati",
            Price:800,
            Rating:4,
            
            };

            var Authors= new Array();
            Authors.push(Author1);

            //var IsRun=false;

            

                var promise = new Promise(function(resolve,reject){

                    if(true){
                        resolve(Author2);
                    } 
                    else{
                        reject("error");
                    }
                
                });
    
                promise.then(
                    function(newAuthor){
                        Authors.push(newAuthor);
                        console.log(newAuthor); 
                },
                function(error){
                    console.log(error);
                },
                
                );

//console.log(Authors);


